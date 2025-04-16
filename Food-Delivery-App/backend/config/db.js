import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://lera:20vareli@ac-zlfh0fa-shard-00-00.z8hkmcv.mongodb.net:27017,ac-zlfh0fa-shard-00-01.z8hkmcv.mongodb.net:27017,ac-zlfh0fa-shard-00-02.z8hkmcv.mongodb.net:27017/?replicaSet=atlas-y5rhak-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};
