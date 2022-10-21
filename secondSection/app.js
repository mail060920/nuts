const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/PAGES/index.html'))
});
app.get('/', (req, res) => {
    res.status(404).send('resource not found')
});

const PORT = 5002
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`)
})

