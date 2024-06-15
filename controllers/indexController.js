const Message = require('../models/message');

const index_get = (req, res) => {
    res.redirect('/chat')
}

// const new_get = (req, res) => {
//     console.log('rendering newMessage');
//     res.render('newMessage', { title: 'Create New' });
// }

// const new_post = (req, res) => {
//     const message = new Message(req.body)
//     message.save().then(() => {
//         res.redirect('/');

//     }).catch((error) => {
//         console.log(error);
//     })
// }

const chat_get = (req, res) => {
    Message.find()
        .sort({ createdAt: -1 }) //switch to 1 if not displaying in reverse order
        .then((messages) => {
            res.render('chat', { title: 'Chat Room', messages });
        })
}

const chat_post = (req, res) => {
    const message = new Message(req.body)
    message.save().then(() => {
        res.redirect('/chat');

    }).catch((error) => {
        console.log(error);
    })
}

module.exports = {
    index_get,

    chat_get,
    chat_post,
    // new_get,
    // new_post
}