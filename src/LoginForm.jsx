function LoginForm({ username, 
                     setUsername, 
                     setLoginStatus,
                     setLoadingStatus,
                     setUsers,
                     setMessages,
                     setErrorMessage,
                     onLogin }){

    // local function
    function onInput(e){
        setUsername(e.target.value);
    }

    function onLoginClick(e){
        e.preventDefault(); // Avoid submit rendering

        if(username){ // empty if not allowed
            onLogin({ username, 
                      setLoginStatus,
                      setLoadingStatus,
                      setUsers, 
                      setMessages, 
                      setErrorMessage });
        }
    }

    return(
        <div>
            <form className="login-form">
                <label>Username: </label>
                <input type="text" placeholder="a - z, A - Z, 0 - 9" value={username} onInput={onInput}></input>
                <button type="button" onClick={onLoginClick}>Log In</button>
            </form>            
        </div>
    )
}

export default LoginForm;