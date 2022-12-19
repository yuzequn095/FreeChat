import { useState } from "react";

import { MESSAGES } from './constant';

import LoginForm from './LoginForm';
import Error from "./Error";
import Welcome from "./Welcome";

function Login({ onLogin, 
                 setLoginStatus, 
                 setLoadingStatus,
                 setUsers, 
                 setMessages, 
                 errorMessage, 
                 setErrorMessage }){
                    
    // local state
    const[username, setUsername] = useState('');
    const err = MESSAGES[errorMessage] || MESSAGES.default;

    return(
        <div className="login">
            <Welcome />
            <Error 
                err={err}
            />
            <LoginForm 
                username={username}
                setUsername={setUsername}
                setLoginStatus={setLoginStatus}
                setLoadingStatus={setLoadingStatus}
                setUsers={setUsers}
                setMessages={setMessages}
                setErrorMessage={setErrorMessage}
                onLogin={onLogin}
            />
        </div>
    );
}

export default Login;