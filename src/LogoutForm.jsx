function LogoutForm({ setLoginStatus, setErrorMessage, onLogout }){

    function onLogoutClick(e){
        e.preventDefault(); // Avoid submit rendering

        onLogout({ setLoginStatus, setErrorMessage });
    }

    return (
        <div>
            <form className="logout-form">
                <button type="button" onClick={onLogoutClick}>Log Out</button>
            </form>
        </div>
    );
}

export default LogoutForm;