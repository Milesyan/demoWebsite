export default class Storage {

  USER_TOKEN = 'USER_TOKEN'

  static saveUserToken(tk) {
    localStorage.setItem([this.USER_TOKEN], tk)
    return true
  }

  static getUserToken() {
    return localStorage.getItem([this.USER_TOKEN])
  }
}