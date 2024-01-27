const mongoose = require('mongoose');

async function connectToDb(){
    let connectionString = process.env.DBURl;

    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(res => {
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