export default class Storage {  
  static saveUserToken(tk) {
    localStorage.setItem('USER_TOKEN', tk)
    return true
  }

  static clearUserToken() {
    localStorage.removeItem('USER_TOKEN')
    return true;
  }

  static getUserToken() {
    return localStorage.getItem('USER_TOKEN')
  }
}