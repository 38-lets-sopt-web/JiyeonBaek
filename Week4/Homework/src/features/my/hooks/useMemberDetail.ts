import { useParams } from 'react-router';

import { MEMBERS } from '@/features/my/constants/member.constants';
import { findMemberById } from '@/features/my/utils/memberSearch';

const useMemberDetail = () => {
  const { memberId } = useParams();

  const member = findMemberById(MEMBERS, memberId ?? '');

  return {
    member,
  };
};

export default useMemberDetail;
