import { Link } from 'react-router';
import SignInForm from '@/features/signin/components/SignInForm';

const SigninPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-[460px]">
        <h1 className="text-primary300 mb-8 text-center text-3xl font-bold tracking-wide">
          SOPT MEMBERS
        </h1>

        <SignInForm />

        <div className="mt-4 text-center">
          <Link
            to="/signup"
            className="hover:text-primary300 inline-block text-sm font-medium transition-colors"
          >
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
