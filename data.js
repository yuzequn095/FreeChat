// Manage Data(users, chat) for FreeChat Client and Server

const session = require('./sessions');
const chat = require('./chat');
const users = require('./users');

// Sessions API
function addSession(username){
    return session.addSession(username);
}

function getSession(sid){
    return session.getSession(sid);
}

function deleteSession(sid){
    return session.deleteSession(sid);
}


// Users API
function isValidUsername(username){
    return users.isValidUsername(username);
}

function addUsersList(username){
    return users.addUsersList(username);
}

function decreaseLoginCount(username){
    return users.decreaseLoginCount(username);
}

function getUsersList(){
    return users.getUsersList();
}

// Chat API
function getChat(){
    return chat.getChat();
}

function updateChat(username, message){
    chat.updateChat(username, message);
}

// Pack the content for FreeChat page
function getContent(){
    let usersContent = getUsersList();
    let messageContent = getChat();

    return {users: usersContent, messages: messageContent};
}

module.exports = {
    addSession,
    getSession,
    deleteSession,
    isValidUsername,
    addUsersList,
    decreaseLoginCount,
    getUsersList,
    getChat,
    updateChat,
    getContent,
};

