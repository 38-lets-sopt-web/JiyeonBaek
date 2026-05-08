export const SIGN_UP_STEPS = {
  ID: 'id',
  PASSWORD: 'password',
  PROFILE: 'profile',
} as const;

export type SignUpStep = (typeof SIGN_UP_STEPS)[keyof typeof SIGN_UP_STEPS];

export const PART_OPTIONS = ['웹', '안드로이드', 'iOS'];

export const SIGN_UP_ERROR_MESSAGE = {
  REQUIRED_ID: '아이디를 입력해주세요.',
  ID_MAX_LENGTH: '아이디는 50자 이하로 입력해주세요.',
  REQUIRED_PASSWORD: '비밀번호를 입력해주세요.',
  PASSWORD_POLICY: '비밀번호는 8~20자, 영어/숫자/특수문자를 각각 1자 이상 포함해야 합니다.',
  REQUIRED_PASSWORD_CONFIRM: '비밀번호를 다시 입력해주세요.',
  PASSWORD_NOT_MATCHED: '비밀번호가 일치하지 않습니다.',
  REQUIRED_NAME: '이름을 입력해주세요.',
  NAME_MAX_LENGTH: '이름은 10자 미만으로 입력해주세요.',
  REQUIRED_EMAIL: '이메일을 입력해주세요.',
  EMAIL_FORMAT: '이메일 형식이 올바르지 않습니다.',
  REQUIRED_AGE: '나이를 입력해주세요.',
  AGE_FORMAT: '나이는 숫자로 입력해주세요.',
  REQUIRED_PART: '파트를 선택해주세요.',
};
