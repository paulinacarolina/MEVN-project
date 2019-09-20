const express = require("express"); //declare express
const app = express(); // initialize const for express
const morgan = require('morgan');
const mongoose = require('mongoose');


// settings 
app.set('port', process.env.PORT || 5010); //set up getting port or default port

mongoose.connect('mongodb://localhost/mevnsdatabase')
.then(db  => console.log('database is connected'))
.catch (err => console.error(err));//show error

//middlewares
//functions to process urls 
app.use(morgan('dev')); //mid for detailed info about requests
app.use(express.json()); // middleware for the data 


//module to refresh server on any change


//routes 
app.use('/tasks', require('./routes/tasks.js'));

//static files
app.use(express.static(__dirname + '/public'));


//setting up the server on port 5050
app.listen(app.get('port'), ()=>{
console.log("server is working", app.get('port')); // msg 
});
