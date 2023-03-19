import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { errorMiddleware } from "./middlewares/index.js";

dotenv.config();

const app = express();

const proxies = process.env.PROXIES ? +process.env.PROXIES : undefined;

if (proxies) {
  app.set("trust proxy", proxies);
}

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/ip", (req, res, next) => {
  try {
    res.send(req.ip);
  } catch (err) {
    next(err);
  }
});

app.get("/ips", (req, res, next) => {
  try {
    res.send(req.ips);
  } catch (err) {
    next(err);
  }
});

app.use("*", (req, res, next) => {
  try {
    res.status(404);
    res.send("Not Found");
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

export { app };
