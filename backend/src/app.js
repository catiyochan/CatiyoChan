import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NodeCache from "node-cache";
import prerender from "prerender-node";

const cache = new NodeCache({ stdTTL: 300 }); // cache for 5 minutes

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://catiyo-chan.vercel.app",
  "https://catiyochan.fun",
  "https://www.catiyochan.fun"
]

app.use(
  cors({
    origin: (origin, callback) =>{
      console.log("CORS request from:", origin);
      if(!origin || allowedOrigins.includes(origin)){
        callback(null,true);
      }else{
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, 
  })
);
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  prerender
    .set('prerenderToken', 'J8gekf0hflXPdexJLBsn') // paste your actual token here
    .whitelisted(['catiyochan.fun', 'www.catiyochan.fun'])
);

// cache data is incomplete so rechaked the code and implement this 
app.get("/catiyochan/games-list", async (req, res) => {
  const cached = cache.get("games-list");
  if (cached) return res.json(cached);

  const data = await getGamesListFromDB(); // Replace with your DB fetch logic
  cache.set("games-list", data);
  res.json(data);
});

// Health check endpoint for load balancers and monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

import publicUserRoutes from "./routes/public.user.routes.js";

app.use("/catiyochan", publicUserRoutes);

export { app };
