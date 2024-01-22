import express from "express";
import got from "got";
import { authMiddleware } from "../../middleware/auth.js";
import languages from "./supportedLanguages.json";

const router = express.Router();

router.use(authMiddleware);

router.post("/translate", async (req, res) => {
  // TODO: validate languages in request
  if (!req.body.text) return res.status(400).send("Missing text");
  const noOfParagraphs = req.body.text.trim().split(/\n\n/g).length;

  // I changed here because of ssl error
  const data = await got
    .get(`http://loripsum.net/api/${noOfParagraphs}/medium`)
    .text();

  res.send({ translated_segments: data.trim().split(/\n\n/g) });
});

router.get("/languages", async (req, res) => {
  res.send({
    languages,
  });
});

export default router;
