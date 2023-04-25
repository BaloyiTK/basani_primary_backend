import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import eventRouter from "./routes/eventRouter.js";
import teamRouter from "./routes/teamRoute.js";
import smsRouter from "./routes/smsRoute.js";
import galleryRouter from "./routes/galleryRoute.js";
import contactRouter from "./routes/contactRoute.js";
import emailRouter from "./routes/emailRoute.js";
import erroHanndler from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//Middlewares
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/api", userRouter);
app.use("/api", eventRouter);
app.use("/api", smsRouter);
app.use("/api", contactRouter);
app.use("/api", teamRouter);
app.use("/api", galleryRouter)
app.use("/api", emailRouter);



const uri = process.env.DATABASE_URI 
const PORT = process.env.PORT


app.use(erroHanndler);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("database connected successful")
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message)
  });
