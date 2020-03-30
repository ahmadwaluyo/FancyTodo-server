const router = require("express").Router();
const todos = require("./todosRoute");

router.use("/todos", todos);

module.exports = router;