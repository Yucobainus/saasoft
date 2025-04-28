import dict from "@/components/dictionary";

export const loginValidation = {
  loginError: false,
  errorMessage() {
    return this.loginError ? dict.loginErrorMessage : "";
  },
  rules: [
    (value: string) => {
      if (value && value.length > 3) return true;
      return dict.loginErrorMessage;
    },
  ],
};
export const passwordValidation = {
  errorPassword: false,
  errorMessage() {
    return this.errorPassword ? dict.passwordErrorMessage : "";
  },
  rules: [
    (value: string) => {
      if (value && value.length <= 100) return true;
      return dict.passwordErrorMessage;
    },
  ],
};
