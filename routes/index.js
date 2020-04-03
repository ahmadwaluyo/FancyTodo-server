const router = require("express").Router();
const todos = require("./todosRoute");
const ControllerUser = require("../controllers/ControllerUser");
const errorHandler = require("../middlewares/errorHandling");
const apiRoute = require('./apiRoutes');

router.post("/login", ControllerUser.login);
router.post("/register", ControllerUser.register);
router.post("/googleSignIn", ControllerUser.googleSignIn);
router.use("/todos", todos);
router.use(apiRoute);
router.use(errorHandler);

module.exports = router;