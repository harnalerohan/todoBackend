const mongoose = require('mongoose');

async function connectToDb(){
    let connectionString = 'mongodb+srv://harnalerohan:rohanharnale@cluster1.vl5nsjd.mongodb.net/todo?retryWrites=true&w=majority'

    try {
        await mongoose.connect(connectionString).then(res => {
            console.log("db connected succesfully");
        }).catch(err => {
            console.log("db connection failed with error", err);
        });
    }catch(err) {
        console.log('err', err)
    };
}

module.exports = {
    connectToDb,
}