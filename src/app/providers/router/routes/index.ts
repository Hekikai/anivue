import type { AIPageRoute } from '@/app/providers/router/routes/types';

const routes: AIPageRoute[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/main/MainPage.vue'),
  },
];

export default routes;
