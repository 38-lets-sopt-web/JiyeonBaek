import type { Member } from '@/features/my/types/member.types';

export const findMemberById = (members: Member[], searchId: string) => {
  return members.find((member) => String(member.id) === searchId.trim()) ?? null;
};
