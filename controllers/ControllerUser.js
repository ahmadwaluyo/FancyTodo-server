const { User } = require("../models");
const { decrypt } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");
const { OAuth2Client } = require('google-auth-library');

class ControllerUser{
    static register(req, res, next) {
        let { email, password } = req.body;
        console.log(req.body);
        
        let created = { email, password };
        User.findOne({
            where: { email }
        })
            .then(newUser => {
                if(newUser) {
                    return next({
                        name: 'Forbidden',
                        errors: { message: 'email already exists !'}
                    })
                } else {
                    return User.create(created);
                }
            })
            .then(result => {
                const payload = { id: result.id, email: result.email };
                const token = generateToken(payload);
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
                    token: token
                })
            })
            .catch(err => {
                return next(err);
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        console.log(req.body)
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
                            token
                        })
                    } else {
                        return next({
                            name: 'BadRequest',
                            errors: { message: 'Invalid email/password'}
                        })
                    }
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: { message: 'Invalid email/password'}
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'NotFound',
                    errors: { message: 'User Not Found' }
                })
            })
    }

    static googleSignIn(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const email = {};
        const sent_client = {};
        const token = req.headers.token;
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                let payload = ticket.getPayload();
                email.payload = payload.email;
                sent_client.picture = payload.picture;
                sent_client.name = payload.name;
                return User.findOne({
                    where: {
                        email: email.payload
                    }
                })
            })
            .then(data => {
                if(data) {
                    return data
                } else {
                    return User.create({
                        email: email.payload,
                        password: process.env.MANUAL_PWD
                    })
                }
            })
            .then(data => {
                sent_client.id = data.id;
                sent_client.email = data.email;
                // let token = generateToken(sent_client);
                // console.log(sent_client);
                return res.status(201).json(sent_client)
            })
            .catch(err => {
                return next(err)
            })
    }

}

module.exports = ControllerUser;