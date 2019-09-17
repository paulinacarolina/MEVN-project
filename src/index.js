const express = require("express"); //declare express
const app = express(); // initialize const for express
const morgan = require('morgan');
// settings 
app.set('port', 5010);

//middlewares
//functions to process urls 
app.use(morgan('dev'));

//module to refresh server on any change


//routes 

//static files
app.use(express.static(__dirname + '/public'));


//setting up the server on port 5050
app.listen(app.get('port'), ()=>{
console.log("server is working", app.get('port')); // msg 
});
