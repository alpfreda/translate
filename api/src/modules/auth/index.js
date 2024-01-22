import express from "express";

export const router = express.Router();

router.post("/login", async (req, res) => {
  if (req.body && req.body.password === "password") {
    const claims = {
      sub: req.body.username,
      name: req.body.username,
      ver: 1,
      cid: req.body.username,
      uid: req.body.username,
      scp: ["profile", "openid"],
      pwd: req.body.password, // 😉
    };

    return res.send({
      access_token: Buffer.from(JSON.stringify(claims), "binary").toString(
        "base64"
      ),
    });
  }
  res.status(401).send("Unauthorized");
});

export default router;
