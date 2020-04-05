const router = require("express").Router()
const ApiController = require("../controllers/ApiController")

router.get("/api/corona", ApiController.corona)

module.exports = router