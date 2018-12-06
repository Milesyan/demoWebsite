const defaultUserInfo = {
  fullName: '',
  email: ''
}
const userInfo = (state = defaultUserInfo, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {...state, ...action.paload};
    default:
      return state;
  }
}

export default userInfo;