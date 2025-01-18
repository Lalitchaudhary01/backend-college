const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

module.exports = {
  PORT: process.env.PORT || 3000,
};
