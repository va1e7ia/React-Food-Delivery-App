import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lera:20vareli@cluster0.z8hkmcv.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
