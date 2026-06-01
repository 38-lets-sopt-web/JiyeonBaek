import useSearchForm from '@/features/my/hooks/useSearchForm';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';

const MyInfoSearch = () => {
  const {
    myInfo,
    errors,
    isSubmitDisabled,
    nameRegister,
    emailRegister,
    ageRegister,
    handleSubmit,
    handleUpdateSubmit,
  } = useSearchForm();

  return (
    <div className="flex w-full flex-col items-center gap-20">
      <h1 className="text-3xl font-bold">내 정보</h1>
      <form
        className="flex w-full max-w-[560px] flex-col gap-5"
        onSubmit={handleSubmit(handleUpdateSubmit)}
      >
        <section className="flex flex-col gap-4 rounded-2xl bg-white/60 px-5 py-6">
          <div className="flex items-center justify-between text-lg">
            <span className="font-bold">아이디</span>
            <span className="font-medium text-gray-400">{myInfo?.loginId}</span>
          </div>
          <div className="flex items-center justify-between text-lg">
            <span className="font-bold">파트</span>
            <span className="font-medium text-gray-400">{myInfo?.part}</span>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <Input label="이름" error={errors.name?.message} {...nameRegister} />
          <Input label="이메일" error={errors.email?.message} {...emailRegister} />
          <Input label="나이" error={errors.age?.message} {...ageRegister} />
        </div>

        <Button type="submit" disabled={isSubmitDisabled} className="mt-4">
          정보 수정
        </Button>
      </form>
    </div>
  );
};

export default MyInfoSearch;
