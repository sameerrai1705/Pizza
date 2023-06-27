const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const url = process.env.Mongo_uri;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connection established ${conn.connection.host}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
  }
};

module.exports = connectDb;
