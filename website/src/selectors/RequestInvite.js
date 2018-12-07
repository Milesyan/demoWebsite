export const getRequestDialogStatus = state => ({
  status: state.RequestInvite.status,
  msg: state.RequestInvite.message
});