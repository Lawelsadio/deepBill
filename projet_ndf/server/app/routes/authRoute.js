const express = require('express');
const router = express.Router();
const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const authcontroller = require("../controllers/auth.controller");


router.post("/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted],authcontroller.signup);

router.post("/auth/signin", authcontroller.signin);

router.get("/test/all", (req, res) => {
  res.status(200).send("Public Content.");
});

router.get("/test/user", [authJwt.verifyToken], (req, res) => {
  res.status(200).send("User Content.");
});

router.get("/test/mod",[authJwt.verifyToken, authJwt.isModerator],(req, res) => {
    res.status(200).send("Moderator Content.");
  }
);

router.get("/test/admin",[authJwt.verifyToken, authJwt.isAdmin],(req, res) => {
    res.status(200).send("Admin Content.");
  }
);

module.exports = router;
