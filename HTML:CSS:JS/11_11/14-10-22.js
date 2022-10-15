var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Burm1234'
});

con.connect(function(err){
    if(err)
    {   console.log(err)
    }
    else {
        console.log('connected')
    }
});