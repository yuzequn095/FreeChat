import { LOADING_STATUS } from './constant';

function MessageHistory({ loadingStatus, messages }){
    return (
        <div className="message">
            {loadingStatus === LOADING_STATUS.PENDING && <div className="lds-facebook"><div></div><div></div><div></div></div>}
            {loadingStatus === LOADING_STATUS.FINISH && 
                <ul className="message-list">
                    {
                        messages.map( message => <li key={message}>{message}</li>)
                    }
                </ul>
            }
        </div>
    );
}

export default MessageHistory;