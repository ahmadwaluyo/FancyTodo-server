const axios = require('axios')

class ApiController {
    static corona(req, res, next) {
        axios.get("https://corona.lmao.ninja/all")
            .then(result => {
                console.log(result.data)
                return res.status(200).json(result.data)
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = ApiController









