import helper from '~/helpers/common';

const index = () => helper.interopDefault(import('@/pages/frontend/index'));

export const frontendRoutes = [
  {
    name: 'index',
    path: '/',
    component: index
  }
];
