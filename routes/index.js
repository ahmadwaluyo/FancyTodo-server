const router = require("express").Router();
const todos = require("./todosRoute");
const ControllerUser = require("../controllers/ControllerUser");

router.post("/login", ControllerUser.login);
router.post("/register", ControllerUser.register);
router.use("/todos", todos);

module.exports = router;