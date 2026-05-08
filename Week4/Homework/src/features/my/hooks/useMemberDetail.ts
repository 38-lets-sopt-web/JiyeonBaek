import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMyInfo } from '@/features/my/api/queries';
import type { MyInfoResponseData } from '@/features/my/api/types';

const useMemberDetail = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState<MyInfoResponseData | null>(null);

  useEffect(() => {
    const fetchMemberDetail = async () => {
      if (!memberId) return;

      try {
        const response = await getMyInfo(Number(memberId));
        setMember(response.data);
      } catch {
        setMember(null);
      }
    };

    void fetchMemberDetail();
  }, [memberId]);

  return {
    member,
  };
};

export default useMemberDetail;
