export interface PasswordValidation {
    length: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasSpecialChar: boolean;
  }
  
  export const validatePassword = (password: string): boolean => {
    return getPasswordValidation(password).length &&
           getPasswordValidation(password).hasUpperCase &&
           getPasswordValidation(password).hasLowerCase &&
           getPasswordValidation(password).hasSpecialChar;
  };
  
  export const getPasswordValidation = (password: string): PasswordValidation => {
    return {
      length: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };
  
  export const checkPasswordMatch = (password: string, confirmPassword: string): boolean => {
    return password !== "" && password === confirmPassword;
  };
  