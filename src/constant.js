// Constatn data

export const LOGIN_STATUS = {
    PENDING: 'pending',
    NOT_LOGGED_IN: 'notLoggedIn',
    IS_LOGGED_IN: 'loggedIn',
};

export const LOADING_STATUS = {
    PENDING: 'pending',
    FINISH: 'finish',
};

export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
    REQUIRED_TEXT: 'required-text',
};

export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
  };

export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
    [CLIENT.NO_SESSION]: 'No session found. Please try again',
    [SERVER.AUTH_MISSING]: 'No information related. Please try again',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again. (dog means incorrect password here)',
    [SERVER.REQUIRED_USERNAME]: 'You Must Enter A Valid Username(a to z, A to Z, 0 to 9). Please try again.',
    [SERVER.REQUIRED_TEXT]: 'Please enter the text, must be non-empty, please try again',
    default: '',
};