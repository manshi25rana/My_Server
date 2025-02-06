// console.log("Welcome to My_Server")

//1. Import Area

var express = require('express')
var app = express() //express is a function and it returnung something

app.get('/', function (req, res){
    res.send("Hello World")
})

app.get('/hello', function (req, res){
    res.send("Good morning everyone")
})

app.get('/Kiran', function (req, res){
    res.send("Hey! Kiran How are you?")
})


app.listen(4000)  