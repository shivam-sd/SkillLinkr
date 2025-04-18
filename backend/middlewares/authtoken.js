const jwt = require("jsonwebtoken");

const authTokenMiddleware = async (req, res, next) => {
  try {
    let token;

    // 1. Try to get token from cookies
    if (req.cookies?.token) {
      token = req.cookies.token;
    }

    // 2. Fallback: Try to get token from Authorization header
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // console.log("Token" , token)
    // console.log("Cookies" , req.cookies)

    // 3. If token still not found
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Token not provided" });
    }

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // 5. Attach user ID to request
    req.userId = decoded.id;

    // 6. Continue
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired. Please log in again." });
    }

    return res.status(403).json({ error: "Invalid token. Authentication failed." });
  }
};

module.exports = authTokenMiddleware;
