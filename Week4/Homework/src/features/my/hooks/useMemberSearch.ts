import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { getMembers, getMyInfo } from '@/features/my/api/queries';
import type { MemberListItem, MyInfoResponseData } from '@/features/my/api/types';

interface MemberSearchFormValues {
  searchId: string;
}

const useMemberSearch = () => {
  const navigate = useNavigate();
  const [searchedMember, setSearchedMember] = useState<MyInfoResponseData | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const [members, setMembers] = useState<MemberListItem[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<MemberSearchFormValues>({
    mode: 'onChange',
    defaultValues: {
      searchId: '',
    },
  });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMembers();
        setMembers(response.data.users);
      } catch {
        alert('회원 목록 조회에 실패했습니다.');
      }
    };

    void fetchMembers();
  }, []);

  const searchIdRegister = register('searchId', {
    required: true,
  });

  const handleSearch = async ({ searchId }: MemberSearchFormValues) => {
    try {
      const response = await getMyInfo(Number(searchId));

      setSearchedMember(response.data);
      setIsSearched(true);
    } catch {
      setSearchedMember(null);
      setIsSearched(true);
    }
  };

  const handleMemberCardClick = (memberId: number) => {
    navigate(`/mypage/members/${memberId}`);
  };

  return {
    members,
    searchedMember,
    isSearched,
    isSearchDisabled: !isValid,
    searchIdRegister,
    handleSearch: handleSubmit(handleSearch),
    handleMemberCardClick,
  };
};

export default useMemberSearch;
