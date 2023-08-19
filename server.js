import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import tourRouter from "./routes/tours.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// connect mongoDb
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connect Success");
    } catch (error) {
        console.log("MongoDB connect failed");
    }
};

app.use(express.json());
app.use(cors());
app.use('/tours', tourRouter);

app.listen(port, () => {
    connect();
    console.log(`Server listening on port: ${port}`);
})