import { Outlet, useNavigate } from 'react-router';

import Header from '@/features/my/components/Header';

const MyPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/signin');
  };

  return (
    <>
      <Header
        userName={localStorage.getItem('userName') ?? '웨비들아따라해님'}
        handleLogout={handleLogout}
      />
      <main className="flex min-h-screen flex-col items-center justify-center gap-10">
        <Outlet />
      </main>
    </>
  );
};

export default MyPage;
