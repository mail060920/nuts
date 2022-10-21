const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {Prohairesis} = require('prohairesis');

const app = express();

const port = process.env.PORT || 8080;
const mySQLString = 'mysql://b6354f5d611743:d30153df@us-cdbr-east-06.cleardb.net/heroku_0120dc5827c5312?reconnect=true';
const database = new Prohairesis(mySQLString);

app
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())

    .post('/api/user', async (req, res)=> {
        const body = req.body;     

        await database.execute(`
            INSERT INTO User (
                first_name,
                last_name,
                age,
                date_added
            ) VALUES (
                @firstName,
                @lastName,
                @age,
                NOW()
            )
        `, {
            firstName: body.first,
            lastName: body.last,
            age: body.age,
        })
        
        res.end('Added user');
    })

    .listen(port, ()=> console.log(`Server is listening on port ${port}`))

