import mongoose from "mongoose";
import bodyParser from 'body-parser';
import express from "express";
import "dotenv/config";
import { logger } from "./Middleware";
import cors from "cors";
import userRouter from "./Routers/users";
import financialRouter from "./Routers/financial";
import galleryRouter from "./Routers/gallery";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import AppError from "./utils/appError";
import globalErrorHandle from "./Controllers/Error/errorController";

const port = 6000;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Smart-Farming API ",
      version: "1.0.0",
      description:
        "This is Smart-Farming API Documentation ",
    },
    servers: [
      {
        url: "http://localhost:6000",
      },
    ],
  },
  apis: ["./Routers/*.js"],
};
const specs = swaggerJSDoc(options);
const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());



app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/v1/", userRouter);
app.use("/financial/", financialRouter);
app.use("/gallery/", galleryRouter);

// app.use("/testimony/", testimonyRouter);
// app.use("/contact/", contactRouter);
// app.use("/payment/", paymentRouter);

// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
// });

// app.use(globalErrorHandle);

mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) => {
  console.log("online Database connected");
});

// mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
//   console.log(" local Database connected");
// });

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

