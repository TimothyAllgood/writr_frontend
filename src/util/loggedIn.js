import jwt_decode from 'jwt-decode';

class LoggedIn {
  static loggedIn = () => {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };

  static setToken = (setUser, token) => {
    const decodedToken = jwt_decode(token);
    setUser(decodedToken.user);
  };

  static decodeToken = () => {
    if (localStorage.getItem('token')) {
      return jwt_decode(localStorage.getItem('token'));
    } else {
      return false;
    }
  };
}

export const loggedIn = LoggedIn.loggedIn;
export const setToken = LoggedIn.setToken;
export const decodeToken = LoggedIn.decodeToken;
export default LoggedIn;
