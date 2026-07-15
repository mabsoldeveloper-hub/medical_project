const express = require("express");
const { body } = require("express-validator");

const authController = require("../controllers/auth.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");
const { validate } = require("../middlewares/validate.middleware");


const router = express.Router();


const signupValidators = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be 2–50 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .withMessage("Password must contain at least one letter and one number"),

  body("role")
    .optional()
    .isIn(["patient", "doctor", "admin"])
    .withMessage("Role must be patient, doctor, or admin"),
];


const loginValidators = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

const profileValidators = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be 2-50 characters"),

  body("phone")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isLength({ max: 20 })
    .withMessage("Phone cannot exceed 20 characters"),

  body("dateOfBirth")
    .optional({ nullable: true, checkFalsy: true })
    .isISO8601()
    .withMessage("Date of birth must be a valid date"),
];


router.post("/signup", signupValidators, validate, authController.signup);

router.post("/login", loginValidators, validate, authController.login);

router.post("/logout", verifyJWT, authController.logout);
router.post("/refresh-token", authController.refreshToken);

router.get("/me", verifyJWT, authController.getMe);
router.patch("/me", verifyJWT, profileValidators, validate, authController.updateProfile);

module.exports = router;
