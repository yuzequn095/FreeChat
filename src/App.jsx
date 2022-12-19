import './App.css';

import { useState, useEffect } from "react";

import {
  LOGIN_STATUS,
  LOADING_STATUS,
} from './constant';

import {
  loginCheck,
  onLogin,
  onLogout,
  onSend,
  onPolling,
} from './action';

import Login from './Login';
import Room from './Room';

function App() {

  // Define Top Level States
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.NOT_LOGGED_IN); // log in status default set as false
  const [loadingStatus, setLoadingStatus] = useState(LOADING_STATUS.PENDING); // chat loading status default as pending
  const [users, setUsers] =  useState([]); // online user lists default as empty array
  const [messages, setMessages] = useState([]); // message list default as empty array
  const [errorMessage, setErrorMessage] = useState(''); // set error message

  // Use userEffect to do a one time login check
  useEffect(
    () => {
      loginCheck({ setLoginStatus, 
                   setUsers, 
                   setMessages, 
                   setErrorMessage });
    },
    [] // empty array for inital render only
  );

  // regualr polling roughtly 5 seconds
  useEffect(
    () => {
      const intervalId = setInterval( () => {
        onPolling({ loginStatus, setUsers, setMessages, setErrorMessage });
      }, 5000);
      return () => {
        clearInterval(intervalId); // clean up function
      };
    },
    [loginStatus]
  );

  return (
    <div className="app">
      { 
        loginStatus === LOGIN_STATUS.NOT_LOGGED_IN &&
        (<Login 
              onLogin={onLogin} 
              setLoginStatus={setLoginStatus}
              setLoadingStatus={setLoadingStatus}
              setUsers={setUsers}
              setMessages={setMessages}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
        />) 
      }
      { loginStatus === LOGIN_STATUS.PENDING && <div className="loader">Loading...</div>}
      { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && 
        (<Room
              onLogout={onLogout}
              onSend={onSend}
              setLoginStatus={setLoginStatus}
              setMessages={setMessages}
              loadingStatus={loadingStatus}
              users={users}
              messages={messages} 
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
        />) 
      }
    </div>
  );
}

export default App;
