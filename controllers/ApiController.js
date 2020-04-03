const axios = require('axios')
const unirest = require("unirest");

class ApiController {
    static getMoviesA(req, res, next) {
        return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "https://jadwalnonton.com/bioskop/di-magelang/platinum-cineplex-artos-mall.html"
            }
        })
    }
    static getMoviesB(req, res, next) {
        return axios.get("https://rest.farzain.com/api/special/bioskop/bioskop_result.php", {
            params: {
                apikey: "RRQ6I38ZiaBEDMgjNrIq4iY8S",
                id: "https://jadwalnonton.com/bioskop/di-banjar/new-star-cineplex-nsc-banjar.html"
            }
        })
    }

    static getWeatherA(req, res, next) {
        axios.get("/api.openweathermap.org/data/2.5/weather", {
            params: {
                "q": "Jakarta",
                "appid": "7d562bbf6d908d3b547e7f600cfddb79"
            }
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err);
        })
    }
    static getWeatherB(req, res, next) {
        axios.get(`/api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: "Banjar",
                appid: "7d562bbf6d908d3b547e7f600cfddb79"
            }
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err);
        })
    }

    static getNBAGames(req, res, next) {
        return axios.get(`https://www.balldontlie.io/api/v1/games`)
    }

    static getPrayer(req, res, next) {
            const query = {
                "city": "Jakarta Pusat",
                "country": "Indonesia"
            }
            const headers = {
                "x-rapidapi-host": "aladhan.p.rapidapi.com",
                "x-rapidapi-key": `37e17cde30msha21f9331bf22049p14ed6cjsn339c31454ea7`
            }
            return unirest.get("https://aladhan.p.rapidapi.com/timingsByCity", {
                params: {
                    city: "Jakarta Pusat",
                    country : "Indonesia"
                }
            }).then(result => {
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
    }

    
}

module.exports = ApiController









