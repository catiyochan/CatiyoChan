import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

// Health check endpoint for load balancers and monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

import publicUserRoutes from "./routes/public.user.routes.js";

app.use("/catiyochan", publicUserRoutes);

export { app };
