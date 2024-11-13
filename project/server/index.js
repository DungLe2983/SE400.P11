require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const app = express();
app.use(express.json());
const port = 8080;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@shosingdb1.e5qkj.mongodb.net/?retryWrites=true&w=majority&appName=ShosingDB1`
    );

    console.log("MongoDB is connected!");
  } catch (error) {
    console.log("Can not connect to MongoDB");
    process.exit(1);
  }
};

connectDB();

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
