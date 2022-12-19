// Manage Users

const usersList = {}; // online users list

// check if a username is valid
function isValidUsername(username){

    if(!username){
        return false;
    }
    
    let isValid = true;

    isValid = isValid && username.trim() && username.match(/^[a-zA-Z0-9]*$/);

    return isValid;
}

// Add username into online list
function addUsersList(username){
    // get the login count (different devices)
    let count = usersList[username] ? usersList[username] : 0;

    // update the count
    usersList[username] = count + 1;
}

// Decrease the login count for username, and remove if count is 0
function decreaseLoginCount(username){
    // update the login count
    usersList[username] = usersList[username] - 1;

    // delete if count is 0
    if(usersList[username] === 0){
        delete usersList[username];
    }
}

// Get the online users list
function getUsersList(){
    const onlineList = [];

    // add users into list array
    Object.keys(usersList).map(user => onlineList.push(user));

    return onlineList;
}

module.exports = {
    isValidUsername,
    addUsersList,
    decreaseLoginCount,
    getUsersList,
};