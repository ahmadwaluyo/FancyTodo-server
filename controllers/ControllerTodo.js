const { Todo } = require("../models");

class ControllerTodo {
    static findAll(req, res) {
        Todo.findAll()
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res) {
        let { title, description, status, due_date } = req.body;
        // console.log(req.body);
        let payload = {
            title : title,
            description : description,
            status : status,
            due_date : due_date
        }
        Todo.create(payload)
            .then(todos => {
                todos ? res.status(201).json(todos) : 
                next ({
                    status: 404,
                    message: { error: 'Todo data not found'}
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById(req, res) {
        let { id } = req.params;
        Todo.findByPk(id)
            .then(todos => {
                todos ? res.status(200).json(todos) :
                next({
                    status : 404,
                    message: { error: 'Todos data not found'}
                })
            })
            .catch(err => {
                next(err)
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
            where : { id : req.params.id },
            returning : true,
            plain: true
        })
            .then(todos => {
                res.status(200).json(todos[1])
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res) {
        let { id } = req.params;
        let deleted;
        Todo.findByPk(id)
        .then(deletedTodo => {
            if(deletedTodo){
                deleted = deletedTodo
                return Todo.destroy({ where : { id }})
            } else {
                next({
                    status: 404,
                    message: { error: 'Todo data not found' }
                })
            }
        })
            .then(todos => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerTodo;