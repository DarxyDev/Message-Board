const Message = require('../models/message');

const index_get = (req, res) => {
    Message.find()
    .sort({ createdAt: 1 })
    .then((messages)=>{
    console.log('rendering index');
    res.render('index', { title: 'Home', messages});
    })
}

const new_get = (req, res) => {
    console.log('rendering newMessage');
    res.render('newMessage', { title: 'Create New' });
}

const new_post = (req, res) => {
    const message = new Message(req.body)
    message.save().then(() => {
        res.redirect('/');

    }).catch((error) => {
        console.log(error);
    })
}

module.exports = {
    index_get,
    new_get,
    new_post
}