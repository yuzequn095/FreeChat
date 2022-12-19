// get the required modules
const express = require('express');
const cookieParser = require('cookie-parser');

const data = require('./data'); // data is API help us heal with user, chat, etc.

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static('./build')); // Use the static rescourses from ./build
app.use(express.json()); // Parse the requests with json content bodies

// Sessions Handlers

// Check for existing seesions
app.get('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid; // get the sid from cookie
    const username = sid ? data.getSession(sid) : ''; // get the username associated with sid or empty

    // if sid or username is nullish or invalid
    if(!sid || !username){
        res.status(401).json({ error: 'auth-missing'}); // return 401 status, and error indicated no such session
        return;
    }

    // return an object with the chat list and users list
    res.json(data.getContent());
});

// Create new user
app.post('/api/v1/session', (req, res) => {
    // get the username in post request
    const {username} = req.body;

    // check if username valid
    if(!data.isValidUsername(username)){
        res.status(400).json({ error: 'required-username'});
        return;
    }

    // check if password valid(fake by checking dog)
    if(username === 'dog'){
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }

    // login user with session
    const sid = data.addSession(username);
    data.addUsersList(username);

    // set cookie and return
    res.cookie('sid', sid);
    res.json(data.getContent());
});

// Logout user
app.delete('/api/v1/session', (req, res) => {
    // get the sid
    const sid = req.cookies.sid;
    const username = sid ? data.getSession(sid) : '';

    // check if sid valid
    if(sid){
        // clean the cookie
        res.clearCookie('sid');
    }

    // check if username valid
    if(username){
        // clean the session
        data.deleteSession(sid);
    }

    data.decreaseLoginCount(username);

    res.json({ username }); // return the username logged out
});

// Chat Handlers

// Get the chat history
app.get('/api/v1/chat', (req, res) => {
    // get the sid
    const sid = req.cookies.sid;
    const username = sid ? data.getSession(sid) : '';

    // if sid or username invalid
    if(!sid || !data.isValidUsername(username)){
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    res.json(data.getContent());
});

// Add new message to chat
app.post('/api/v1/chat', (req, res) => {
    // get the sid
    const sid = req.cookies.sid;
    const username = sid ? data.getSession(sid) : '';

    // if sid or username invalid
    if(!sid || !data.isValidUsername(username)){
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    // get the new message
    const { message } = req.body;

    // if message is empty
    if(!message.trim()){
        res.status(400).json({ error: 'required-text' });
        return;
    }

    // add new message to chat
    data.updateChat(username, message);

    res.json(data.getChat());
});

app.listen(PORT, () => console.log(`express server http://localhost:${PORT}`));