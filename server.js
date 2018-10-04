var express  = require('express');
var app = express();
var morgan = require('morgan');             // middleware to log http requests
var port = 8080 || process.env.PORT;
var mongoose = require('mongoose');
var router = express.Router();
var apiRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use('/api', apiRoutes);

// connecting to mongo database
mongoose.connect('mongodb://localhost:27017/zulu', { useNewUrlParser: true }, function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database.');
    }
});

app.get('/', function (req,res) {
    res.send('Hello from Zulu.')
});

// server listening on port 8080
app.listen(port, function () {
    console.log('Server running on port 8080');
});