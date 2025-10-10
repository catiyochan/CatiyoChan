import { app } from "./app.js";
import dotenv from "dotenv";
import connectToDatabase from "./db/index.js";
dotenv.config({
  path: "./.env",
});


connectToDatabase()
.then(() => {
  const serverPort = process.env.PORT || 4000;
  try {
    app.on("error", (err) => {
      console.error("Server error:", err); 
      throw err;
    });

    app.listen(serverPort, () => {
      console.log(`\n Server is running on port ${serverPort} \n`);

       // ✅ Add this block only for production (Render deployment)
        if (process.env.NODE_ENV === "production") {
          const pingURL = "https://catiyochan.onrender.com/health";
          setInterval(() => {
            fetch(pingURL)
              .then(() => console.log("Pinged:", pingURL))
              .catch(() => console.log("Ping failed, maybe sleeping"));
          }, 600000); // 10 minutes
        }
      });
  } catch (error) {
    console.error("Error during server initialization:", error);
  }
})
.catch((error) => {
  console.log("MongoDB connection is failed!!:", error);
})