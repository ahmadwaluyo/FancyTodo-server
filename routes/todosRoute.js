const router = require("express").Router();
const ControllerTodo = require("../controllers/ControllerTodo");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);
router.post("/",ControllerTodo.create);
router.get("/", ControllerTodo.findAll);
router.get("/:id", authorization, ControllerTodo.findById);
router.put("/:id", authorization, ControllerTodo.update);
router.patch('/done/:id', authorization, ControllerTodo.markDone);
router.patch('/undone/:id', authorization, ControllerTodo.markUndone);
router.delete("/:id", authorization, ControllerTodo.delete);

module.exports = router;