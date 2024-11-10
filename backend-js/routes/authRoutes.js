const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post('/login', login);

module.exports = router;