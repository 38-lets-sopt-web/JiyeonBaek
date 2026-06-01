import { EMAIL_REGEX, MY_ERROR_MESSAGE } from '@/features/my/constants/my.constants';

export const validateEmail = (email: string) => {
  if (!EMAIL_REGEX.test(email)) {
    return MY_ERROR_MESSAGE.EMAIL_FORMAT;
  }

  return true;
};

export const isEmptyFieldIncluded = (values: Record<string, string>) => {
  return Object.values(values).some((value) => !value);
};
