// All Action Handler

import { LOADING_STATUS, LOGIN_STATUS } from './constant';
import {
    fetchSession,
    fetchLogin,
    fetchLogout,
    fetchAddChat,
    fetchChat,
  } from './services';

// Check if session valid
export function loginCheck({ setLoginStatus, setUsers, setMessages, setErrorMessage }) {
    fetchSession()
    .then(content => {
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setUsers(content.users);
        setMessages(content.messages);
        setErrorMessage('');
    }) // it is okay if we check user not log in when init program
};

// Login Action
export function onLogin({ username, setLoginStatus, setLoadingStatus, setUsers, setMessages, setErrorMessage }){
    setLoginStatus(LOGIN_STATUS.PENDING);
    fetchLogin(username)
    .then(content => {
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setUsers(content.users);
        setMessages(content.messages);
        setErrorMessage('');
        return new Promise((resolve) => {setTimeout(resolve, 1000)});
    })
    .then(() => {
        setLoadingStatus(LOADING_STATUS.FINISH);
    })
    .catch( err => {
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        setErrorMessage(err?.error || 'ERROR');
    })
};

// Logout Action
export function onLogout({ setLoginStatus, setErrorMessage }){
    fetchLogout()
    .then(username => {
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        setErrorMessage('');
    })
};

// Send Message Action
export function onSend({ message, setMessages, setErrorMessage }){
    fetchAddChat(message)
    .then(chat => {
        setMessages(chat);
        setErrorMessage('');
    })
    .catch( err => {
        setErrorMessage(err?.error || 'ERROR');
    })
};

// Regular pooling to patch chat content
export function onPolling({ loginStatus, setUsers, setMessages, setErrorMessage }){
    // if user logged in
    if(loginStatus === LOGIN_STATUS.IS_LOGGED_IN){
        fetchChat()
        .then( content => {
            setUsers(content.users);
            setMessages(content.messages);
        })
    }
};