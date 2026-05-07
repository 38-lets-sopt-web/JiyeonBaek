import useSignInForm from '@/features/signin/hooks/useSignInForm';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';

const SignInForm = () => {
  const { idRegister, passwordRegister, handleSubmit, errors, isValid, loginError, onSubmit } =
    useSignInForm();

  return (
    <section className="flex min-h-screen items-center justify-center">
      <form className="w-full max-w-[460px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            error={errors.id?.message}
            {...idRegister}
          />

          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            error={errors.password?.message}
            {...passwordRegister}
          />

          {loginError && <p className="text-center text-sm text-red-500">{loginError}</p>}

          <Button type="submit" disabled={!isValid}>
            로그인
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
