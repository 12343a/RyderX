require('dotenv').config();
const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    if (!process.env.DB_CONNECT) throw new Error("DB_CONNECT is not defined in .env");

    // Deprecated options removed
    await mongoose.connect(process.env.DB_CONNECT); 
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
