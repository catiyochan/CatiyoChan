import mongoose from "mongoose";
import { Gamelist } from "../models/gamelist.model.js";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config({ path: "./.env" });

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read JSON file
const gamelistData = JSON.parse(
  readFileSync(join(__dirname, "../data/gamelist.json"), "utf8")
);

// Update the terminal command to run this script
// node src/db/import.gamelist.js

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // you can remove this line for mongoose 6+ warning fix
  })
  .then(async () => {
    // await Gamelist.deleteMany({});
    // await Gamelist.insertMany(gamelistData.gamelist);
    // console.log("Game list imported successfully!");
   await Gamelist.updateOne(
        {},
        { $set: gamelistData.gamelist },
        { upsert: true }
      );
      console.log("All games lists updated successfully!");

    //  const newGamelist = await Gamelist.create(gamelistData.gamelist);
    // console.log("Game list imported successfully!");
    
    // // Verify the import
    // const verify = await Gamelist.findOne({});
    // console.log("\n=== VERIFICATION ===");
    // console.log("Android games:", verify["Android Game List"]?.length || 0);
    // console.log("Xbox games:", verify["Xbox Game List"]?.length || 0);
    // console.log("PS4 games:", verify["PS4 Game List"]?.length || 0);
    
    // if (verify["Android Game List"]?.length > 0) {
    //   console.log("\nFirst Android game:", verify["Android Game List"][0].game_name);
    // }
      process.exit();
  })
  .catch((error) => {
    console.error("Error importing game list:", error);
    process.exit(1);
  });
