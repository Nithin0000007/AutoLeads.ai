import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/leads", leadRoutes);

app.get('/', (req, res) => {
  res.send('Backend is on Fireee');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log(err));