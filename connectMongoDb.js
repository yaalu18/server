import mongoose from "mongoose";

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;

//import mongoose from "mongoose";

//const connectDB = async (connectionUrl) => {
//  try {
//    const conn = await mongoose.connect(connectionUrl, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//    });
//    console.log(`MongoDB connected: ${conn.connection.host}`);
//  } catch (error) {
//    console.error(error);
//    process.exit(1);
//  }
//};

//export default connectDB;
