const jwt = require('jsonwebtoken')
require("dotenv").config();

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new Error("Please provide username and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_Secret, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created ", token });
};

const dashboard = (req, res) => {
  let luckyNumber = Math.floor(Math.random() * 100 + 1);

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here your secret lucky number : ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
