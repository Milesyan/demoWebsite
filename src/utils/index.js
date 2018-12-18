export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];

export function convertNumToChar(num) {
  if (num < 10) {
    return chnNumChar[num];
  } else if (num === 10) {
    return '十';
  } else if (num < 20) {
    return `十${chnNumChar[num % 10]}`
  } else {
    return 'N/A'
  }
}