//importing express library downloaded from npm install express
const { application, response } = require('express');
const express = require('express'); 

//let logging = require('./login-form.html'); 

//execution returns an instance of the server, (app is just a convention can be named anything)
const app = express(); 

app.use(express.static('static')); 

app.get('/', (req,res) => {
    res.send('<h1> Welcome To The Doodle App! </h1>'); 
}); 

//app.use(express.urlencoded({
  //  extended: true 
//}))


app.post('/login', (req,res) => {
//logging in
let userName = req.body.usr; 
let password = req.body.pwd; 
let message = "Access Denied"; 
if (userName == "admin" && password == '123') {
    message = 'Welcome'; 
}
res.send(message); 
})
app.use(express.static('static'))

app.listen(1500); 