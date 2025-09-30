import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lokendra-nodeboard-app:nodeboard-lokendra25@cluster0.chos0bq.mongodb.net/noteboard_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error Connection", error);
    process.exit(1); // exit when failure
  }
};
