const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw new Error('Error connecting to database');
  }
};

module.exports = dbConnect;