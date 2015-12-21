console.log('ITS MY FIRST NODE APP! OH AND I GUESS HELLO WORLD');

// Mongoose connection to MongoDB (ted/ted is readonly)
/*mongoose.connect('mongodb://localhost/my_database', function (error) {
    if (error) {
        console.log(error);
    }
});
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id: String,
    name: String,
    age: String,
    status: String,
    groups: [String]
});
// Mongoose Model definition
var User = mongoose.model('users', UserSchema);


// URLS management
app.get('/', function (req, res) {
    res.send("<a href='/users'>Show Users</a>");
});

app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});


// Mongoose connection to MongoDB 
mongoose.connect('mongodb://localhost/my_database', function (error) {
    if (error)return console.log(error);
    console.log("MongoDB: connection to database succesful!");
     
    var server = app.listen(80, function () { 
      console.log('Express: listening port: ', server.address().port);
    });
    
});

var endMongoConnection = function() { 
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
 
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', endMongoConnection).on('SIGTERM', endMongoConnection);*/