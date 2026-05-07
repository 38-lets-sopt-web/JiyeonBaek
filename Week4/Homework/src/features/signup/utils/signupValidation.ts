import { SIGN_UP_ERROR_MESSAGE } from '@/features/signup/constants/signup.constants';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\d+$/;

export const validateId = (value: string) => {
  if (value.length > 20) return SIGN_UP_ERROR_MESSAGE.ID_MAX_LENGTH;
  return true;
};

export const validatePassword = (value: string) => {
  if (!PASSWORD_REGEX.test(value)) return SIGN_UP_ERROR_MESSAGE.PASSWORD_POLICY;
  return true;
};

export const validatePasswordConfirm = (value: string, password: string) => {
  if (value !== password) return SIGN_UP_ERROR_MESSAGE.PASSWORD_NOT_MATCHED;
  return true;
};

export const validateName = (value: string) => {
  if (value.length >= 10) return SIGN_UP_ERROR_MESSAGE.NAME_MAX_LENGTH;
  return true;
};

export const validateEmail = (value: string) => {
  if (!EMAIL_REGEX.test(value)) return SIGN_UP_ERROR_MESSAGE.EMAIL_FORMAT;
  return true;
};

export const validateAge = (value: string) => {
  if (!NUMBER_REGEX.test(value)) return SIGN_UP_ERROR_MESSAGE.AGE_FORMAT;
  return true;
};
