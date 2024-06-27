import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authorization token is missing" });
    }

    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(403).json({ message: "Invalid token" });
  }
};


export default auth;
