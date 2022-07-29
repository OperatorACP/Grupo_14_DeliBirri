const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/cerveza', (req,res)=>{
    res.sendFile(__dirname + '/views/cerveza.html');
});




