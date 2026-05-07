import { Link } from 'react-router';

import SignUpForm from '@/features/signup/components/SignUpForm';

const SignupPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-[460px] flex-col gap-5">
        <h1 className="text-primary300 text-center text-3xl font-bold">회원가입</h1>

        <SignUpForm />

        <p className="text-center text-sm text-gray-400">
          이미 계정이 있나요?{' '}
          <Link
            to="/signin"
            className="hover:text-primary300 text-text font-medium transition-colors"
          >
            로그인
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
