import { MESSAGES, } from './constant';
import OnlineUsers from "./OnlineUsers";
import MessageHistory from "./MessageHistory";
import MessageForm from "./MessageForm";
import LogoutForm from "./LogoutForm";
import Error from "./Error";

function Room({ onLogout, 
                onSend, 
                setLoginStatus, 
                setMessages, 
                loadingStatus,
                users, 
                messages, 
                errorMessage, 
                setErrorMessage }){
                    
    // local state
    const err = MESSAGES[errorMessage] || MESSAGES.default;

    return(
        <div className="main">
            <div className="room">
                <OnlineUsers 
                    loadingStatus={loadingStatus}
                    users={users}
                />
                <div className="chat">
                    <Error 
                        err={err}
                    />
                    <MessageHistory 
                        loadingStatus={loadingStatus}
                        messages={messages}
                    />
                    <MessageForm 
                        setMessages={setMessages}
                        setErrorMessage={setErrorMessage}
                        onSend={onSend}
                    />
                </div>
            </div>
            <div>
                <LogoutForm 
                    setLoginStatus={setLoginStatus}
                    setErrorMessage={setErrorMessage}
                    onLogout={onLogout}
                />
            </div>
        </div>
    )
}

export default Room;