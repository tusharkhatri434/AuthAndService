const dotEnv = require('dotenv');
const bcrypt = require('bcrypt');
dotEnv.config();

module.exports = {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(9)
};