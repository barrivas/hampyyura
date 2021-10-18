const express = require("express");
const router = express.Router();

// Controller
const usersController = require("../controllers/userController");

// Middlewares
const uploadFile = require("../middlewares/userMulterMiddleware");
const validations = require("../validations/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// Procesar el registro
router.post(
  "/register",
  uploadFile.single("avatar"),
  validations,
  usersController.processRegister
);

// Formulario de login
router.get("/login", guestMiddleware, usersController.login);

// Procesar el login
router.post("/login", usersController.loginProcess);

// Perfil de Usuario
router.get("/userProfile/", authMiddleware, usersController.profile);

// Logout
router.get("/logout/", usersController.logout);

module.exports = router;
