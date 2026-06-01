import { Outlet, useNavigate } from 'react-router';

import Header from '@/features/my/components/Header';
import useSearchForm from '@/features/my/hooks/useSearchForm';

const MyPage = () => {
  const navigate = useNavigate();
  const { myInfo } = useSearchForm();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/signin');
  };

  return (
    <>
      <Header userName={myInfo?.name ?? ''} handleLogout={handleLogout} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-10">
        <Outlet />
      </main>
    </>
  );
};

export default MyPage;
