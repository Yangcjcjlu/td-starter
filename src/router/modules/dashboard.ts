import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const dashboard: IRouter[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Statistical Report',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/Dashboard/Base')),
        meta: {
          title: 'DashBoard',
        },
      },
      // {
      //   path: 'detail',
      //   Component: lazy(() => import('pages/Dashboard/Detail')),
      //   meta: {
      //     title: 'Detail',
      //   },
      // },
    ],
  },
];

export default dashboard;
