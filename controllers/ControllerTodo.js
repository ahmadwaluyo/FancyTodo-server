const { Todo } = require("../models");

class ControllerTodo {
    static findAll(req, res) {
        Todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static create(req, res) {
        let { title, description, status, due_date } = req.body;
        console.log(req.body);
        let payload = {
            title : title,
            description : description,
            status : status,
            due_date : due_date
        }
        Todo.create(payload)
            .then(todos => {
                res.status(201).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findById(req, res) {
        let { id } = req.params;
        Todo.findByPk(id)
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        let { title, description, status, due_date } = req.body;
        let payload = {
            title : title,
            description : description,
            status : status,
            due_date : due_date
        }
        Todo.update(payload, {
            where : { id : req.params.id }
        })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        Todo.destroy({ where : { id : req.params.id }})
            .then(todos => {
                res.status(200).json({
                    msg : 'Successfully delete'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ControllerTodo;