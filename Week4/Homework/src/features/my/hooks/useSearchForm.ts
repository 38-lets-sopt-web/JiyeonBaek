import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getMyInfo, patchMyInfo } from '@/features/my/api/queries';
import type { MyInfoResponseData } from '@/features/my/api/types';
import { MY_ERROR_MESSAGE } from '@/features/my/constants/my.constants';
import { validateEmail } from '@/features/my/utils/myValidation';

interface SearchFormValues {
  name: string;
  email: string;
  age: string;
}

const useSearchForm = () => {
  const [myInfo, setMyInfo] = useState<MyInfoResponseData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<SearchFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      age: '',
    },
  });

  useEffect(() => {
    const fetchMyInfo = async () => {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        alert('로그인 정보가 없습니다.');
        return;
      }

      try {
        const response = await getMyInfo(Number(userId));

        setMyInfo(response.data);
        reset({
          name: response.data.name,
          email: response.data.email,
          age: String(response.data.age),
        });
      } catch {
        alert('내 정보 조회에 실패했습니다.');
      }
    };

    void fetchMyInfo();
  }, [reset]);

  const nameRegister = register('name', {
    required: MY_ERROR_MESSAGE.REQUIRED_FIELD,
  });

  const emailRegister = register('email', {
    required: MY_ERROR_MESSAGE.REQUIRED_FIELD,
    validate: validateEmail,
  });

  const ageRegister = register('age', {
    required: MY_ERROR_MESSAGE.REQUIRED_FIELD,
  });

  const handleUpdateSubmit = async ({ name, email, age }: SearchFormValues) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert('로그인 정보가 없습니다.');
      return;
    }

    try {
      const response = await patchMyInfo(Number(userId), {
        name,
        email,
        age: Number(age),
      });

      setMyInfo(response.data);
      reset({
        name: response.data.name,
        email: response.data.email,
        age: String(response.data.age),
      });

      alert(MY_ERROR_MESSAGE.UPDATE_SUCCESS);
    } catch {
      alert(MY_ERROR_MESSAGE.UPDATE_FAILED);
    }
  };

  const isSubmitDisabled = !isDirty || !isValid;

  return {
    myInfo,
    errors,
    isSubmitDisabled,
    nameRegister,
    emailRegister,
    ageRegister,
    handleSubmit,
    handleUpdateSubmit,
  };
};

export default useSearchForm;
