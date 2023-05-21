import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import uniformRouter from "./routes/uniformRoute.js";
import eventRouter from "./routes/eventRouter.js";
import teamRouter from "./routes/teamRoute.js";
import statsRouter from "./routes/statisticRoute.js";
import announcementRouter from "./routes/announcemenRoute.js";
import smsRouter from "./routes/smsRoute.js";
import historyRouter from "./routes/historyRoute.js";
import galleryRouter from "./routes/galleryRoute.js";
import admissionRouter from "./routes/admissionRoute.js";
import contactRouter from "./routes/contactRoute.js";
import emailRouter from "./routes/emailRoute.js";
import programRouter from "./routes/programRoute.js";
import erroHanndler from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//Middlewares
app.use(
  cors({
    credentials: true,
    origin: "https://www.basaniprimary.co.za",
    //origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(erroHanndler);

//Routes
app.use("/api", userRouter);
app.use("/api", eventRouter);
app.use("/api", smsRouter);
app.use("/api", contactRouter);
app.use("/api", teamRouter);
app.use("/api", galleryRouter);
app.use("/api", emailRouter);
app.use("/api", uniformRouter);
app.use("/api", announcementRouter);
app.use("/api", programRouter);
app.use("/api", statsRouter);
app.use("/api", historyRouter);
app.use("/api", admissionRouter);

const uri = process.env.DATABASE_URI;
const PORT = process.env.PORT;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("database connected successful");
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });
