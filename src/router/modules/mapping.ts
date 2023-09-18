import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const mapping: IRouter[] = [
  {
    path: '/mapping',
    meta: {
      title: 'mapping',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'tree',
        Component: lazy(() => import('pages/Mapping/Tree')),
        meta: {
          title: 'mapping info',
        },
      },
    ],
  },
  {
    path:'/custom-tree',
    Component: lazy(() => import('pages/Mapping/CustomTree'))
  }
];

export default mapping;
