// Service Call

// Check Log In Status
export function fetchSession(){
    return fetch('/api/v1/session', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    });
};

// Log In New User
export function fetchLogin(username){
    return new Promise((resolve) => {
        setTimeout(resolve, 1000); // pause the program for 1s to display the spinner 1000
    })
    .then(() => fetch('/api/v1/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ username }),
    }))
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
        if(response.ok){
            return response.json();
        }
        
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    });
};

// Log Out User
export function fetchLogout(){
    return fetch('/api/v1/session', {
        method: 'DELETE',
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    });
};

// Get the chat content
export function fetchChat(){
    return fetch('/api/v1/chat', {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    });
};

// Post new message
export function fetchAddChat(message){
    return fetch('/api/v1/chat', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ message }),
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
        if(response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    });
};