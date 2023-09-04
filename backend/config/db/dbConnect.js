const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://pavankumar:Mongodb123@cluster0.h3de7jn.mongodb.net/?retryWrites=true&w=majority", {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
