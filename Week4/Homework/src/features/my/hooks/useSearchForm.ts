import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MY_ERROR_MESSAGE, MY_INFO } from '@/features/my/constants/my.constants';
import { validateEmail } from '@/features/my/utils/myValidation';

interface SearchFormValues {
  name: string;
  email: string;
  age: string;
}

const useSearchForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid, isDirty },
  } = useForm<SearchFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: MY_INFO.name,
      email: MY_INFO.email,
      age: MY_INFO.age,
    },
  });

  useEffect(() => {
    void trigger();
  }, [trigger]);

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

  const handleUpdateSubmit = () => {
    alert(MY_ERROR_MESSAGE.UPDATE_SUCCESS);
  };

  const isSubmitDisabled = !isDirty || !isValid;

  return {
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
