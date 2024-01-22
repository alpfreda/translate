import http from "http";
import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import bodyParser from "body-parser";
import translationRoutes from "./modules/translation/translation.js";
import authRoutes from "./modules/auth/index.js";

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

export default app;
