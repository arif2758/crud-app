import mongoose from "mongoose";
const connectMongoDB = async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("Couldn't connect to mongodb");
  }
};

export default connectMongoDB;
