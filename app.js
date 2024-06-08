const express = require('express');

const app = express();

//start server
app.listen(8080);
//set ejs
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
})
