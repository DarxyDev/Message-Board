const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb and start server
const connectString = process.env.MONGO_CONNECTION;
mongoose.connect(connectString).then((result) => {
    console.log('connected to DB');
    app.listen(8080);
}).catch((err) => console.log(err))

//set public folder
app.use(express.static('public'));

//set ejs view engine
app.set('view engine', 'ejs');

//get requests
app.get('/',(req, res)=>{
    res.render('index',{title: 'Home'})
})

//404 keep as last request
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404 - Page not found'
    })
});