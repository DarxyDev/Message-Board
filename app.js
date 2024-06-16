const express = require('express');
const mongoose = require('mongoose');

const {createServer} = require('node:http');
const { Server } = require("socket.io");

const indexRoutes = require('./routes/indexRoutes')

const app = express();
const server = createServer(app);

//socket
const io = new Server(server);
io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})
//constants
const PORT_NUM = 8080;
//connect to mongodb and start server
const connectString = process.env.MONGO_CONNECTION;

console.log('Attempting to connect to DB...');
const startTime = Date.now();
mongoose.connect(connectString).then((result) => {
    console.log(`Connected to DB in ${Date.now() - startTime}ms`);
    console.log(`Server is listening on port ${PORT_NUM}`)
    //app.listen(PORT_NUM);
    server.listen(PORT_NUM)
}).catch((err) => console.log(err))

//set static public folder
app.use(express.static('public'));

//set ejs view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({ extended: true }));
//routes
app.use('/', indexRoutes);

//404 keep as last request
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 - Page not found'
    });
});