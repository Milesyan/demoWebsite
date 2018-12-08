import { validateEmail } from '../index';

describe('Validate Email util', () => {

  it('should return correct results of whether the email is valid', () => {
    expect(validateEmail("email@domain.com")).toBeTruthy();
    expect(validateEmail("12345@domain.co.cn")).toBeTruthy();
    expect(validateEmail("email+addtional@domain123.com")).toBeTruthy();
    expect(validateEmail("email-test@domain.com")).toBeTruthy();

    expect(validateEmail("qwefqef")).toBeFalsy();
    expect(validateEmail("@qwdqwd.com")).toBeFalsy();
    expect(validateEmail("test@domain")).toBeFalsy();
    expect(validateEmail("test@@domain.com")).toBeFalsy();
    expect(validateEmail("test@domain..com")).toBeFalsy();
    expect(validateEmail("test@domain.c")).toBeFalsy();
  });
  
});