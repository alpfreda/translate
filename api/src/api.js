import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import http from "http";
import morgan from "morgan";
import serverless from "serverless-http";
import authRoutes from "./modules/auth/index.js";
import translationRoutes from "./modules/translation/translation.js";

const app = express();

app.use(cors());
app.use(compression());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authRoutes);
app.use(translationRoutes);

const server = http.createServer(app);
const port = process.env.PORT || 9000;

setImmediate(() => {
  server.listen(port, () => {
    console.log("Express server listening on %s", port);
  });
});

export const handler = serverless(app);

export default app;
