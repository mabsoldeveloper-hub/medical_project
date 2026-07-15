const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const { sendError } = require("../utils/apiResponse");


const verifyJWT = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return sendError(
        res,
        401,
        "Access denied. No token provided. Please login first."
      );
    }

    const accessToken = authHeader.split(" ")[1]; 
 
    let decoded;
    try {
      decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    } catch (jwtError) {
      if (jwtError.name === "TokenExpiredError") {
        return sendError(
          res,
          401,
          "Access token expired. Please use /api/auth/refresh-token to get a new one."
        );
      }
      return sendError(res, 401, "Invalid access token. Please login again.");
    }

    const user = await User.findById(decoded.id).select("-password -refreshToken");

    if (!user) {
      return sendError(res, 401, "User no longer exists.");
    }

    if (!user.isActive) {
      return sendError(res, 403, "Your account has been deactivated. Contact support.");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("verifyJWT error:", error);
    return sendError(res, 500, "Authentication error.");
  }
};


const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return sendError(
        res,
        403,
        `Access denied. Required role: [${roles.join(", ")}]. Your role: ${req.user.role}`
      );
    }
    next();
  };
};

module.exports = { verifyJWT, authorizeRoles };
