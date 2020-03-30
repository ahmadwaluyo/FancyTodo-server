const router = require("express").Router();
const ControllerTodo = require("../controllers/ControllerTodo");

router.get("/", ControllerTodo.findAll);
router.post("/create", ControllerTodo.create);
router.get("/:id", ControllerTodo.findById);
router.put("/:id", ControllerTodo.update);
router.delete("/:id", ControllerTodo.delete);

module.exports = router;