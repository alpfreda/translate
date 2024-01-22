export const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const claims = Buffer.from(token, "base64").toString("binary");
      const parsedClaims = JSON.parse(claims);
      if (parsedClaims.pwd === "password") return next();
    } catch {
      // do nothing and return unauthorized
    }
  }
  res.status(401).send("Unauthorized");
};
