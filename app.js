var express = require('express');
var todoController = require('./controllers/todoController');
var http =require('http');
var app = express();

//set up template engine
 app.set('view engine', 'ejs');

 //static files
 app.use(express.static('./public'));

//fire controllers
todoController(app);





// app.set('port', process.env.PORT || 3000);

 //listen to port
// app.listen(3000);
// console.log('You are listening to port 3000')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
