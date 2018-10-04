var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); // Annoying warning was appearing on the console

// define user model
var userSchema = new mongoose.Schema({

    username : {
        type: String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique: true,
        required: true
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('User', userSchema);