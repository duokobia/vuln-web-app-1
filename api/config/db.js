const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);

    // Exit the process if it fails by passing in a 1 argument
    process.exit(1);
  }
};

module.exports = connectDB;
