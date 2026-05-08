import { useNavigate } from 'react-router';
import useMemberDetail from '../hooks/useMemberDetail';
import { MEMBER_DETAIL_LABELS } from '../constants/member.constants';

const MemberDetail = () => {
  const navigate = useNavigate();
  const { member } = useMemberDetail();

  const titleStyle = 'text-center text-3xl font-bold';

  if (!member) {
    return (
      <section className="flex w-full flex-col items-center gap-8">
        <h1 className={titleStyle}>상세 정보</h1>
        <p className="text-lg font-medium text-gray-400">해당 멤버를 찾을 수 없습니다.</p>
      </section>
    );
  }

  const getMemberValue = (key: (typeof MEMBER_DETAIL_LABELS)[number][1]) => {
    if (key === 'age') return `${member.age}세`;
    return member[key];
  };

  return (
    <section className="flex w-full max-w-[560px] flex-col gap-6">
      <h1 className={titleStyle}>상세 정보</h1>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="hover:text-primary300 w-fit text-lg font-medium text-gray-400 transition-colors"
      >
        ← 뒤로가기
      </button>

      <dl className="grid grid-cols-[80px_1fr] gap-y-5 rounded-2xl bg-white/60 px-6 py-8 text-lg">
        {MEMBER_DETAIL_LABELS.map(([label, key]) => (
          <div key={key} className="contents">
            <dt className="font-bold">{label}</dt>
            <dd className="text-right font-medium">{getMemberValue(key)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default MemberDetail;
