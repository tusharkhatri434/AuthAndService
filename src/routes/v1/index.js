const express = require('express');
 
const UserController = require('../../controllers/user-controler');

const router = express.Router();

router.post('/signup',UserController.create);
router.post('/signin',UserController.signIn);

module.exports = router;