import { format } from 'date-fns';
import { ProjectType } from '../types/project';

export const ADMIN_EMAIL = ['thewoowon@naver.com'];

export const TAKE = 5;

export const getOrderBy = (orderBy?: string) => {
  return orderBy
    ? orderBy === 'latest'
      ? { orderBy: { createdAt: 'desc' } }
      : orderBy === 'expensive'
    : undefined;
};

export const distribution = ['All', 'Personal', 'Organization'];

export const projects: ProjectType[] = [
  {
    id: 1,
    router: '/portfolio/wmc',
    image: '/assets/wmc_thumb.png',
    path: 'wmc',
    title: 'WMC',
    type: 'Personal',
    description: 'We Make the Code, 개발자들의 공간',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 2,
    router: '/portfolio/lovekong',
    image: '/assets/lovekong_thumb.png',
    path: 'lovekong',
    title: '러브콩 스테인드 글라스',
    type: 'Personal',
    description: '지인의 스테인드 글라스 제품을 판매하는 커머스 웹앱',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 3,
    router: '/portfolio/hiagile',
    image: '/assets/hiagile_thumb.png',
    path: 'hiagile',
    title: '하이! 애자일(Hi! Agile)',
    type: 'Organization',
    description: '프로젝트 관리를 위한 웹앱',
    stacks: ['React', 'TypeScript', 'Nest.js', 'GraphQL'],
  },
  {
    id: 4,
    router: '/portfolio/saladpeace',
    image: '/assets/saladpeace_thumb.png',
    path: 'saladpeace',
    title: '샐러드피스(Salad Peace)',
    type: 'Personal',
    description: '직장인들의 샐러드 생활을 위한 거점 배송 서비스',
    stacks: ['React', 'TypeScript', 'Nest.js', 'GraphQL'],
  },
  {
    id: 5,
    router: '/portfolio/ubtech',
    image: '/assets/ubtech_thumb.png',
    path: 'ubtech',
    title: '유비케어 기술블로그',
    type: 'Personal',
    description: '유비케어를 위한 기술블로그',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 6,
    router: '/portfolio/solvabot',
    image: '/assets/solvabot_thumb.png',
    path: 'solvabot',
    title: '솔바 봇',
    type: 'Personal',
    description: '개발자들의 비상주 시간을 위한 챗봇',
    stacks: ['.NET', 'Bot Framework'],
  },
  {
    id: 7,
    router: '/portfolio/solvabotmanager',
    image: '/assets/solvabotmanager_thumb.png',
    path: 'solvabotmanager',
    title: '솔바 봇 매니저',
    type: 'Personal',
    description: '솔바 봇의 관리자 웹앱',
    stacks: ['.NET', 'Blazor'],
  },
  {
    id: 8,
    router: '/portfolio/solvaagora',
    image: '/assets/solvaagora_thumb.png',
    path: 'solvaagora',
    title: '솔바 아고라',
    type: 'Personal',
    description: '솔바테크놀러지의 아고라 웹앱',
    stacks: ['.NET', 'Blazor'],
  },
];
