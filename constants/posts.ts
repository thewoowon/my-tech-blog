import { format } from 'date-fns';

export const ADMIN_EMAIL = ['thewoowon@naver.com'];

export const TAKE = 5;

export const getOrderBy = (orderBy?: string) => {
  return orderBy
    ? orderBy === 'latest'
      ? { orderBy: { createdAt: 'desc' } }
      : orderBy === 'expensive'
    : undefined;
};

export const distribution = [
  '전체',
  '솔바테크놀러지',
  '유비케어',
  '개인 프로젝트',
  '그룹 프로젝트',
  '기타',
];

export const projects = [
  {
    id: 1,
  },
];
