import useMemberSearch from '@/features/my/hooks/useMemberSearch';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Tag from '@/shared/ui/Tag/Tag';
import Card from '@/shared/ui/Card/Card';

const MemberSearch = () => {
  const {
    members,
    searchedMember,
    isSearched,
    isSearchDisabled,
    searchIdRegister,
    handleSearch,
    handleMemberCardClick,
  } = useMemberSearch();

  const descriptionStyle = 'text-lg font-medium text-gray-400';
  const infoValueStyle = 'text-right font-medium text-primary300';

  return (
    <section className="mt-[10rem] flex w-full flex-col items-center gap-20 py-20">
      <div className="flex w-full max-w-[560px] flex-col gap-8">
        <h1 className="text-center text-3xl font-bold">회원 조회</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSearch}>
          <Input
            label="회원 ID"
            type="number"
            placeholder="ID를 입력하세요"
            {...searchIdRegister}
          />
          <Button type="submit" disabled={isSearchDisabled}>
            검색
          </Button>
        </form>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">검색 결과</h2>
          <div className="flex min-h-[190px] items-center justify-center rounded-xl bg-white/60 p-6">
            {!isSearched && <p className={descriptionStyle}>원하는 ID를 검색해 보세요!</p>}
            {isSearched && !searchedMember && (
              <p className={descriptionStyle}>검색 결과가 없습니다.</p>
            )}

            {searchedMember && (
              <dl className="grid w-full grid-cols-[80px_1fr] gap-y-5 text-lg">
                <dt className="font-bold">아이디</dt>
                <dd className={infoValueStyle}>{searchedMember.userId}</dd>
                <dt className="font-bold">이름</dt>
                <dd className={infoValueStyle}>{searchedMember.name}</dd>
                <dt className="font-bold">이메일</dt>
                <dd className={infoValueStyle}>{searchedMember.email}</dd>
                <dt className="font-bold">나이</dt>
                <dd className={infoValueStyle}>{searchedMember.age}</dd>
                <dt className="font-bold">파트</dt>
                <dd className={infoValueStyle}>{searchedMember.part}</dd>
              </dl>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[800px]">
        <h2 className="mb-6 text-xl font-bold">전체 멤버 리스트</h2>
        <ul className="grid grid-cols-5 gap-5">
          {members.map((member) => (
            <li key={member.id}>
              <Card role="button" tabIndex={0} onClick={() => handleMemberCardClick(member.id)}>
                <strong className="text-base font-bold">{member.name}</strong>
                <Tag>{member.part}</Tag>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MemberSearch;
