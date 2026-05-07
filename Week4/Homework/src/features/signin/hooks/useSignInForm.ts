import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SignInFormValues {
  id: string;
  password: string;
}

const useSignInForm = () => {
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormValues>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const clearLoginError = () => {
    setLoginError('');
  };

  const idRegister = register('id', {
    required: '아이디를 입력해주세요.',
    onChange: clearLoginError,
  });

  const passwordRegister = register('password', {
    required: '비밀번호를 입력해주세요.',
    onChange: clearLoginError,
  });

  const onSubmit = (data: SignInFormValues) => {
    const isLoginSuccess = data.id === 'assignment' && data.password === '1234';

    if (!isLoginSuccess) {
      setLoginError('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }

    setLoginError('');
    console.log(data);
  };

  return {
    idRegister,
    passwordRegister,
    handleSubmit,
    errors,
    isValid,
    loginError,
    onSubmit,
  };
};

export default useSignInForm;
