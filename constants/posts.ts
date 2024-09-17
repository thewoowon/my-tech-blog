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
    router: '/portfolio/skybridge',
    image: '/assets/skybridge_thumb.png',
    path: 'skybridge',
    title: '꿈을 이루는 힘, 스카이브릿지',
    type: 'Organization',
    description: '꿈을 이루는 힘, 스카이브릿지',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 2,
    router: '/portfolio/tikitaka',
    image: '/assets/tikitaka_thumb.png',
    path: 'tikitaka',
    title: '면접부터 합격까지. AI 면접 코칭, 티키타카',
    type: 'Organization',
    description: '이력서와 채용 공고만 넣으면 준비 끝!',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 3,
    router: '/portfolio/tikitaka',
    image: '/assets/tikitaka_thumb.png',
    path: 'tikitaka',
    title: '면접부터 합격까지. AI 면접 코칭, 티키타카',
    type: 'Organization',
    description: '이력서와 채용 공고만 넣으면 준비 끝!',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 4,
    router: '/portfolio/kritic',
    image: '/assets/kritic_thumb.png',
    path: 'kritic',
    title: 'Kritic - Always Be Awake!',
    type: 'Personal',
    description: '이전보다 더 빠르게, 더 정확하게, 더 편리하게',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 5,
    router: '/portfolio/planzy',
    image: '/assets/planzy_thumb.png',
    path: 'planzy',
    title: 'Planzy - 식물, 공간, 사람 세개(계)를 잇다',
    type: 'Organization',
    description: '식물, 공간 그리고 사람을 이은 새로운 쇼츠 플랫폼',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 6,
    router: '/portfolio/checky',
    image: '/assets/checky_thumb.png',
    path: 'checky',
    title: `Checky - Save your 5 minute`,
    type: 'Organization',
    description: '단 5초, GPT로 컨텐츠 한눈에 체크하고 광고 분류까지!',
    stacks: ['Chrome Extension', 'Next.js', 'TypeScript'],
  },
  {
    id: 7,
    router: '/portfolio/filmdoms',
    image: '/assets/filmdoms_thumb.png',
    path: 'filmdoms',
    title: `FILMDOM'S`,
    type: 'Organization',
    description: '영화인을 준비하는 학생들을 위한 커뮤니티, 필름덤즈',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 8,
    router: '/portfolio/lovekong',
    image: '/assets/lovekong_thumb.png',
    path: 'lovekong',
    title: '러브콩 스테인드 글라스',
    type: 'Personal',
    description: '지인의 스테인드 글라스 제품을 판매하는 커머스 웹앱',
    stacks: ['Next.js', 'TypeScript'],
  },
  {
    id: 9,
    router: '/portfolio/hiagile',
    image: '/assets/hiagile_thumb.png',
    path: 'hiagile',
    title: '하이! 애자일(Hi! Agile)',
    type: 'Organization',
    description: '애자일한 프로젝트 관리 웹앱',
    stacks: ['React', 'TypeScript', 'Nest.js', 'GraphQL'],
  },
  {
    id: 10,
    router: '/portfolio/saladpeace',
    image: '/assets/saladpeace_thumb.png',
    path: 'saladpeace',
    title: '샐러드피스(Salad Peace)',
    type: 'Personal',
    description: '직장인들의 샐러드 생활을 위한 거점 배송 서비스',
    stacks: ['React', 'TypeScript', 'Nest.js', 'GraphQL'],
  },
];
