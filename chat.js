// Manage Messages

const chatList = [
    'FreeChat Admin: Welcome to FreeChat!', // default message from admin
];

// Get the chat data
function getChat(){
    return chatList;
}

// Add username and message to chat
function updateChat(username, message){
    chatList.push(username + ': ' + message);
}

module.exports = {
    getChat,
    updateChat,
};