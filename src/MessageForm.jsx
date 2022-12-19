import { useState } from "react";

function MessageForm({ setMessages, 
                       setErrorMessage,
                       onSend }){

    // local state
    const [message, setMessage] = useState('');

    // local action
    function onInput(e){
        setMessage(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault(); // Avoid submit rendering
        setMessage(''); // clear the input
        
        onSend({ message, setMessages, setErrorMessage });
    }

    return (
        <form className="message-form" onSubmit={onSubmit}>
            <label>New Message: </label>
            <input type="text" name="message" value={message} className="message-input" onInput={onInput}></input>
            <button type="submit" className="message-button">Send</button>
        </form>        
    );
}

export default MessageForm;