const express = require("express");
const { json, send } = require("express/lib/response");
const UserControllers = require("../controllers/controllers.user");
const midUser = require("../middleware/middleware.user");
const router = express.Router();

router.post("/user", midUser);
router.put("/user/:id", midUser);

const userControllers = new UserControllers();

router.get("/", (req, res) => {
  return res.send("Hello World!");
});
router.get("/user", userControllers.index);
router.post("/user", userControllers.create);
router.post("/user/login", userControllers.login);
router.put("/user/:id", userControllers.update);
router.delete("/user/:id", userControllers.delete);

module.exports = router;
