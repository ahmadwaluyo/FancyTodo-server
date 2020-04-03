const router = require("express").Router()
const ApiController = require("../controllers/ApiController")


router.get("/api/magelang", ApiController.getMoviesA)
router.get("/api/banjar", ApiController.getMoviesB)
router.get("/api/getWeatherA", ApiController.getWeatherA)
router.get("/api/getWeatherB", ApiController.getWeatherB)
router.get("/api/praying", ApiController.getPrayer)
router.get("/api/nba", ApiController.getNBAGames)


module.exports = router