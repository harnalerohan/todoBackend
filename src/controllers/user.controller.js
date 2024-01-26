const UserItem = require('./../db/models/user.model');


function createUser(req, res){
    let user = new UserItem({
        firstName: req.body.firstName, // String is shorthand for {type: String}
        lastName: req.body.lastName,
        username: req.body.username,
        contact: req.body.contact,
        email: req.body.email,
    });

    try {
        user.save().then((doc) => {
            return res.status(200).json({
                message: 'success',
                data: doc,
            });
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Failure',
        })
    }
}

function getUser(){
    
}

function updateUser(){
    
}

function deleteUser(){
    
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};