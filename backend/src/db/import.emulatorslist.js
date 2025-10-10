import mongoose from "mongoose";
import { EmulatorsList } from "../models/emulatorslist.model.js";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config({ path: "./.env" });

// update the terminal command to run this script
// node src/db/import.emulatorslist.js

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read JSON file
const emulatorsListData = JSON.parse(
  readFileSync(join(__dirname, "../data/emulators_list.json"), "utf8") 
);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true,})
  .then(async () => {
    // await EmulatorsList.deleteMany({});
    // await EmulatorsList.insertMany(emulatorsListData.emulators_list);
    // console.log("Emulators list imported successfully!");
    await EmulatorsList.updateOne(
      {},
      { $set: emulatorsListData.emulators_list },
      { upsert: true }
    );
    console.log("All emulators lists updated successfully!");
    process.exit();
  })
  .catch((error) => {   
    console.error("Error importing emulators list:", error);
    process.exit(1);
  });   