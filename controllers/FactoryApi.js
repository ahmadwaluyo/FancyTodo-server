const ApiController = require('./ApiController');

class FactoryApi {
    static nba(req, res, next) {
        ApiController.getNBAGames()
            .then(result => {
                // console.log('sukses')
                console.log(result.data)
            })
            .catch(err => {
                // console.log('gagal')
                console.log(err)
            })
    }

    static pray(req, res, next) {
        ApiController.getPrayer()
        .then(result => {
            console.log(result.data)
            console.log('oke');
        })
        .catch(err => {
            console.log('no')
        })
    }

    static movieA(req, res, next) {
        ApiController.getMoviesA()
            .then(result => {
                const sent_client = result.data;
                return sent_client;
            })
            .catch(err => {
                console.log('no')
                return next(err)
            })
    }
}

// FactoryApi.nba()
// FactoryApi.pray()
// FactoryApi.movieA()
module.exports = FactoryApi;