import mongoose from "mongoose";

export const dbConnect = () => {
  if (mongoose.connection.readyState > 1) {
    return;
  }

  mongoose
    .connect(process.env.DATABASE_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to local database"));
};
