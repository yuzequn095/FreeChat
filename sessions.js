// Manage Sessions

const uuid = require('uuid').v4;

const sessions = {}; // object to store pair of sid & username

// Associate a random sid with passed in username in sessions
function addSession(username){
    const sid = uuid();

    sessions[sid] = { username };

    return sid;
}

// Return the associated username with the passed in sid
function getSession(sid){
    return sessions[sid]?.username;
}

// Delete both sid and username from sessions
function deleteSession(sid){
    delete sessions[sid];
}

module.exports = {
    addSession,
    getSession,
    deleteSession,
};