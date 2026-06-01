import { PART_OPTIONS, SIGN_UP_STEPS } from '@/features/signup/constants/signup.constants';
import useSignUpForm from '@/features/signup/hooks/useSignUpForm';
import Button from '@/shared/ui/Button/Button';
import Dropdown from '@/shared/ui/Dropdown/Dropdown';
import Input from '@/shared/ui/Input/Input';

const SignUpForm = () => {
  const {
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
  } = useSignUpForm();

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(handleSignUpSubmit)}>
      {step === SIGN_UP_STEPS.ID && (
        <Input
          label="아이디"
          placeholder="아이디를 입력해 주세요"
          error={errors.id?.message}
          {...idRegister}
        />
      )}

      {step === SIGN_UP_STEPS.PASSWORD && (
        <>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            error={errors.password?.message}
            {...passwordRegister}
          />

          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해 주세요"
            type="password"
            error={errors.passwordConfirm?.message}
            {...passwordConfirmRegister}
          />
        </>
      )}

      {step === SIGN_UP_STEPS.PROFILE && (
        <>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
            error={errors.name?.message}
            {...nameRegister}
          />

          <Input
            label="이메일"
            placeholder="이메일을 입력해 주세요"
            error={errors.email?.message}
            {...emailRegister}
          />

          <Input
            label="나이"
            placeholder="나이를 입력해 주세요"
            error={errors.age?.message}
            {...ageRegister}
          />

          <Dropdown label="파트" error={errors.part?.message} {...partRegister}>
            {PART_OPTIONS.map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </Dropdown>
        </>
      )}

      {step === SIGN_UP_STEPS.PROFILE ? (
        <Button type="submit" disabled={isSubmitDisabled} className="mt-2">
          회원가입
        </Button>
      ) : (
        <Button type="button" disabled={isSubmitDisabled} className="mt-2" onClick={handleNextStep}>
          다음
        </Button>
      )}
    </form>
  );
};

export default SignUpForm;
