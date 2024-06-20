const Message = require('../models/message');

const index_get = (req, res) => {
    res.redirect('/chat')
}

const chat_get = (req, res) => {
    Message.find()
        .sort({ createdAt: 1 }) //switch to -1 if displaying in reverse order
        .then((messages) => {
            res.render('chat', { title: 'Chat Room', messages });
        })
}

const chat_post = (req, res) => {
    
    const message = new Message(req.body)
    message.save().then(() => {
        res.end('Message posted to DB.');

    }).catch((error) => {
        console.log(error);
    })
}

module.exports = {
    index_get,

    chat_get,
    chat_post,
}