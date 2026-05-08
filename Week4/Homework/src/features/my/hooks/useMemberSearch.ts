import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { MEMBERS } from '@/features/my/constants/member.constants';
import type { Member } from '@/features/my/types/member.types';
import { findMemberById } from '@/features/my/utils/memberSearch';

interface MemberSearchFormValues {
  searchId: string;
}

const useMemberSearch = () => {
  const navigate = useNavigate();
  const [searchedMember, setSearchedMember] = useState<Member | null>(null);
  const [isSearched, setIsSearched] = useState(false);

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

  const searchIdRegister = register('searchId', {
    required: true,
  });

  const handleSearch = ({ searchId }: MemberSearchFormValues) => {
    const member = findMemberById(MEMBERS, searchId);

    setSearchedMember(member);
    setIsSearched(true);
  };

  const handleMemberCardClick = (memberId: number) => {
    navigate(`/mypage/members/${memberId}`);
  };

  return {
    members: MEMBERS,
    searchedMember,
    isSearched,
    isSearchDisabled: !isValid,
    searchIdRegister,
    handleSearch: handleSubmit(handleSearch),
    handleMemberCardClick,
  };
};

export default useMemberSearch;
