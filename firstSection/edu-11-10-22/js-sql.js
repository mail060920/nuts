// https://www.youtube.com/watch?v=EN6Dx22cPRI

const express = requere('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pssword: 'Burm1234',
    database: 'nodemysql',
});

// Connect
db.connect(err) => {
    if(err){
        throw err;
    }
    console.log('My SQL connected...')
};

// Create DB
const app = express();
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRYMARY KEY(id)';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert Post 1

app.get('/addpost1', (req, res) => {
    let post = {title: 'Post one', body: 'This is post #1'};
    let sql = 'INSERT INTO posts SET ?';
    let query =db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post #1 added...');
    })
})

// Insert Post 

app.get('/addpost2', (req, res) => {
let post = {title: 'Post two', body: 'This is post #2'};
    let sql = 'INSERT INTO posts SET ?';
    let query =db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post #2 added...');
    })
})

// Select Posts 

app.get('/getposts', (req, res) => {
        let sql = 'SELECT * FROM posts';
        let query =db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send('Posts fetched...');
        })
    })

// Select Single Post 

app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.param.id}`;
    let query =db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    })
})

// Update post

app.get('/updatepost/:id', (req, res) => {
    let newtitle = 'Updated title';
    let sql = `UPDATE posts SET title = '${newtitle}' WHERE id = ${req.param.id}`;
    let query =db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts updated...');
    })
})

// Delete  Post 

app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.param.id}`;
    let query =db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts deleted...');
    })
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
})