import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { postSignIn } from '@/features/signin/api/queries';

interface SignInFormValues {
  id: string;
  password: string;
}

const useSignInForm = () => {
  const navigate = useNavigate();
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

  const onSubmit = async ({ id, password }: SignInFormValues) => {
    try {
      const response = await postSignIn({
        loginId: id,
        password,
      });

      localStorage.setItem('userId', String(response.data.userId));
      setLoginError('');
      navigate('/mypage');
    } catch {
      setLoginError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
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
