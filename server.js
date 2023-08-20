import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import tourRouter from "./routes/tours.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
// o cors permite comunicao de diferentes urls
const corsOptions = {
    origin: true,
    credentials: true
}

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
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
    connect();
    console.log(`Server listening on port: ${port}`);
})