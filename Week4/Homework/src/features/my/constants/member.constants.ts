import type { Member } from '@/features/my/types/member.types';

export const MEMBERS: Member[] = [
  {
    id: 1,
    userId: 'assignment',
    name: '웨비들아따랑해',
    email: 'sopt@sopt.org',
    age: 25,
    part: '웹',
  },
  { id: 2, userId: 'testtest', name: '과제화이팅', email: 'sopt@sopt.org', age: 25, part: '웹' },
  { id: 3, userId: 'ios01', name: '나연', email: 'nayeon@sopt.org', age: 24, part: 'iOS' },
  { id: 4, userId: 'ios02', name: '김철수', email: 'chulsoo@sopt.org', age: 23, part: 'iOS' },
  { id: 5, userId: 'web01', name: '홍길동', email: 'gildong@sopt.org', age: 26, part: '웹' },
  { id: 6, userId: 'web02', name: '이채영', email: 'chaeyoung@sopt.org', age: 24, part: '웹' },
  { id: 7, userId: 'server01', name: '클클라', email: 'server@sopt.org', age: 27, part: '서버' },
  { id: 8, userId: 'design01', name: '이채영', email: 'design@sopt.org', age: 22, part: '디자인' },
  { id: 9, userId: 'plan01', name: 'const', email: 'plan@sopt.org', age: 25, part: '기획' },
  { id: 10, userId: 'var01', name: 'var', email: 'var@sopt.org', age: 25, part: '웹' },
];

export const MEMBER_DETAIL_LABELS = [
  ['이름', 'name'],
  ['아이디', 'userId'],
  ['이메일', 'email'],
  ['나이', 'age'],
  ['파트', 'part'],
] as const;
