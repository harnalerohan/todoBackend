const ToDoItem = require('./../db/models/todo.model');

function createToDo(req, res){
    try {
        let toDo = new ToDoItem({
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted,
        });

        toDo.save().then((doc) => {
            return res.status(200).json({
                message: 'success',
                data: doc,
            });
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Failure'
        })
    }
}

function getToDo(req, res){
    try {
        ToDoItem.find().then(results => {
            return res.status(200).json({
                message: 'success',
                data: results,
            });
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: 'Failure'
        })
    }
}

function updateToDo(req, res){
    
}

function deleteToDo(req, res){
    
}

module.exports = {
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
};