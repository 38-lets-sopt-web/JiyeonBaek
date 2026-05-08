import { Link } from 'react-router';

interface HeaderProps {
  userName: string;
  handleLogout: () => void;
}

const Header = ({ userName, handleLogout }: HeaderProps) => {
  const navItemStyle = 'transition-colors hover:text-text';

  return (
    <header className="bg-primary300 fixed top-0 right-0 left-0 z-10 flex items-center justify-between px-20 py-10 text-white">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">SOPT MEMBERS</h1>
        <p className="text-sm font-medium">안녕하세요, {userName}님!</p>
      </div>

      <nav className="flex items-center gap-6 text-lg font-semibold">
        <Link to="/mypage" className={navItemStyle}>
          내 정보
        </Link>

        <Link to="/mypage/members" className={navItemStyle}>
          회원 조회
        </Link>

        <button type="button" onClick={handleLogout} className={navItemStyle}>
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;
