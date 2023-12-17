const express = require('express');
 
const UserController = require('../../controllers/user-controler');
const { AuthRequestValidater } = require("../../middlewares/index");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidater.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidater.validateUserAuth,
  UserController.signIn
);

module.exports = router;