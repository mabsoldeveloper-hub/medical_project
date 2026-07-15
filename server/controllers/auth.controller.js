const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const {
  generateAccessToken,
  generateRefreshToken,
  setRefreshTokenCookie,
  clearRefreshTokenCookie,
} = require("../utils/generateTokens");
const { sendSuccess, sendError } = require("../utils/apiResponse");



const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;


    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return sendError(res, 409, "An account with this email already exists.");
    }

    const user = await User.create({ name, email, password, role });

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    setRefreshTokenCookie(res, refreshToken);
    return sendSuccess(res, 201, "Account created successfully!", {
      user: user.toPublicJSON(),
      accessToken,
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.code === 11000) {
      return sendError(res, 409, "An account with this email already exists.");
    }

    return sendError(res, 500, "Something went wrong during signup.");
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password +refreshToken"
    );

    if (!user) {
      // Use vague error message to prevent user enumeration attacks
      return sendError(res, 401, "Invalid email or password.");
    }

    if (!user.isActive) {
      return sendError(res, 403, "Your account has been deactivated. Contact support.");
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return sendError(res, 401, "Invalid email or password.");
    }

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    setRefreshTokenCookie(res, refreshToken);

    return sendSuccess(res, 200, "Logged in successfully!", {
      user: user.toPublicJSON(),
      accessToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    return sendError(res, 500, "Something went wrong during login.");
  }
};


const logout = async (req, res) => {
  try {

    await User.findByIdAndUpdate(
      req.user._id,
      { refreshToken: null },
      { new: true }
    );

    clearRefreshTokenCookie(res);

    return sendSuccess(res, 200, "Logged out successfully.");
  } catch (error) {
    console.error("Logout error:", error);
    return sendError(res, 500, "Something went wrong during logout.");
  }
};


const refreshToken = async (req, res) => {
  try {

    const tokenFromCookie = req.cookies?.refreshToken;

    if (!tokenFromCookie) {
      return sendError(res, 401, "No refresh token. Please login again.");
    }

    let decoded;
    try {
      decoded = jwt.verify(tokenFromCookie, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      clearRefreshTokenCookie(res);
      return sendError(res, 401, "Refresh token expired or invalid. Please login again.");
    }

    const user = await User.findById(decoded.id).select("+refreshToken");

    if (!user || user.refreshToken !== tokenFromCookie) {
      clearRefreshTokenCookie(res);
      return sendError(res, 401, "Invalid refresh token. Please login again.");
    }

    const newAccessToken = generateAccessToken(user._id, user.role);

    const newRefreshToken = generateRefreshToken(user._id);
    user.refreshToken = newRefreshToken;
    await user.save({ validateBeforeSave: false });
    setRefreshTokenCookie(res, newRefreshToken);

    return sendSuccess(res, 200, "Token refreshed successfully.", {
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    return sendError(res, 500, "Something went wrong while refreshing token.");
  }
};


const getMe = async (req, res) => {
  try {
    return sendSuccess(res, 200, "User profile fetched successfully.", {
      user: req.user.toPublicJSON ? req.user.toPublicJSON() : req.user,
    });
  } catch (error) {
    console.error("GetMe error:", error);
    return sendError(res, 500, "Could not fetch user profile.");
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, phone, dateOfBirth } = req.body;

    const updates = {};

    if (typeof name === "string") {
      updates.name = name.trim();
    }

    if (typeof phone === "string") {
      updates.phone = phone.trim() || null;
    }

    if (dateOfBirth !== undefined) {
      updates.dateOfBirth = dateOfBirth || null;
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    });

    return sendSuccess(res, 200, "Profile updated successfully.", {
      user: user.toPublicJSON(),
    });
  } catch (error) {
    console.error("Update profile error:", error);
    return sendError(res, 500, "Could not update profile.");
  }
};

module.exports = { signup, login, logout, refreshToken, getMe, updateProfile };
