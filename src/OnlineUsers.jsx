import { LOADING_STATUS } from './constant';

function OnlineUsers({ loadingStatus, users }){
    return (
        <div className="online-users">
            {loadingStatus === LOADING_STATUS.PENDING && <div className="lds-facebook"><div></div><div></div><div></div></div>}
            {loadingStatus === LOADING_STATUS.FINISH && 
                <div>
                    <h3>Online Users</h3>
                    <ul className="users-list">
                        {
                            users.map( user => <li key={user}>{user}</li>)
                        }
                    </ul>
                </div> 
            }
        </div>
    );
}

export default OnlineUsers;