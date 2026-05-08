import Header from '@/features/my/components/Header';
import SearchForm from '@/features/my/components/SearchForm';

const MyPage = () => {
  return (
    <>
      <Header
        userName={localStorage.getItem('userName') ?? '웨비들아따라해님'}
        handleLogout={() => {
          localStorage.removeItem('userId');
        }}
      />
      <div className="flex min-h-screen flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-bold">내 정보</h1>
        <SearchForm />
      </div>
    </>
  );
};

export default MyPage;
