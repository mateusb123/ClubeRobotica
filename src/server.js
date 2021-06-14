const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'app/public')));
app.set('views', path.join(__dirname, 'app/views'));

app.use('/', (req,res) => {
    res.render('home/index.html');
});

server.listen(3000, () => {
    console.log('server running : 3000');
});