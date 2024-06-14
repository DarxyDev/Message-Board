const express = require('express');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/indexRoutes')

const app = express();

//connect to mongodb and start server
const connectString = process.env.MONGO_CONNECTION;
mongoose.connect(connectString).then((result) => {
    console.log('connected to DB');
    app.listen(8080);
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