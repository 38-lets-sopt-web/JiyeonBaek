import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';

import {
  SIGN_UP_ERROR_MESSAGE,
  SIGN_UP_STEPS,
  type SignUpStep,
} from '@/features/signup/constants/signup.constants';
import {
  validateAge,
  validateEmail,
  validateId,
  validateName,
  validatePassword,
  validatePasswordConfirm,
} from '@/features/signup/utils/signupValidation';

interface SignUpFormValues {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const useSignUpForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<SignUpStep>(SIGN_UP_STEPS.ID);

  const {
    register,
    control,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
      passwordConfirm: '',
      name: '',
      email: '',
      age: '',
      part: '웹',
    },
  });

  const values = useWatch({ control });

  const idRegister = register('id', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_ID,
    validate: validateId,
  });

  const passwordRegister = register('password', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_PASSWORD,
    validate: validatePassword,
    onChange: () => {
      void trigger('passwordConfirm');
    },
  });

  const passwordConfirmRegister = register('passwordConfirm', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_PASSWORD_CONFIRM,
    validate: (value) => validatePasswordConfirm(value, getValues('password')),
  });

  const nameRegister = register('name', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_NAME,
    validate: validateName,
  });

  const emailRegister = register('email', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_EMAIL,
    validate: validateEmail,
  });

  const ageRegister = register('age', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_AGE,
    validate: validateAge,
  });

  const partRegister = register('part', {
    required: SIGN_UP_ERROR_MESSAGE.REQUIRED_PART,
  });

  const isIdStepDisabled = !values.id || Boolean(errors.id);

  const isPasswordStepDisabled =
    !values.password ||
    !values.passwordConfirm ||
    Boolean(errors.password) ||
    Boolean(errors.passwordConfirm);

  const isProfileStepDisabled =
    !values.name ||
    !values.email ||
    !values.age ||
    !values.part ||
    Boolean(errors.name) ||
    Boolean(errors.email) ||
    Boolean(errors.age) ||
    Boolean(errors.part);

  const isSubmitDisabled =
    step === SIGN_UP_STEPS.ID
      ? isIdStepDisabled
      : step === SIGN_UP_STEPS.PASSWORD
        ? isPasswordStepDisabled
        : isProfileStepDisabled;

  const handleNextStep = async () => {
    if (step === SIGN_UP_STEPS.ID) {
      const isValid = await trigger('id');
      if (isValid) setStep(SIGN_UP_STEPS.PASSWORD);
      return;
    }

    if (step === SIGN_UP_STEPS.PASSWORD) {
      const isValid = await trigger(['password', 'passwordConfirm']);
      if (isValid) setStep(SIGN_UP_STEPS.PROFILE);
    }
  };

  const handleSignUpSubmit = (data: SignUpFormValues) => {
    alert(`${data.name}님 회원가입이 완료되었습니다.`);
    navigate('/signin');
  };

  return {
    step,
    errors,
    isSubmitDisabled,
    idRegister,
    passwordRegister,
    passwordConfirmRegister,
    nameRegister,
    emailRegister,
    ageRegister,
    partRegister,
    handleNextStep,
    handleSubmit,
    handleSignUpSubmit,
  };
};

export default useSignUpForm;
