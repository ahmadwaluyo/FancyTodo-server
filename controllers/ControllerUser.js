const { User } = require("../models");
const { decrypt } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

class ControllerUser{
    static register(req, res, next) {
        let { email, password } = req.body;
        let created = { email, password };
        User.findOne({
            where: { email }
        })
            .then(newUser => {
                if(!newUser) {
                    return User.create(created)
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: [{ message: 'Invalid email or password !'}]
                    })
                }
            })
            .then(result => {
                const payload = { id: result.id, email: result.email };
                const token = generateToken(payload);
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
                    access_token: token
                })
            })
            .catch(err => {
                return next({
                    name: 'InternalServerError',
                    errors: [{ message: err }]
                })
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        console.log(`login as : ${req.body}`);
        User.findOne({
            where: { email }
        })
            .then(foundUser => {
                const payload = { id: foundUser.id, email: foundUser.email };
                let token = generateToken(payload);
                if(foundUser) {
                    let verify = decrypt(password, foundUser.password);
                    if(verify) {
                        return res.status(200).json({
                            msg: 'Successfully login',
                            token: token
                        })
                    } else {
                        return next({
                            name: 'BadRequest',
                            errors: [{ message: 'Username/password wrong'}]
                        })
                    }
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: [{ message: 'Username/password wrong'}]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'NotFound',
                    errors: [{ message: 'User Not Found' }]
                })
            })
    }

}

module.exports = ControllerUser;