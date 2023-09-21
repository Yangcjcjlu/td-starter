import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const mapping: IRouter[] = [
  {
    path: '/mapping',
    meta: {
      title: 'Distribution',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'tree',
        Component: lazy(() => import('pages/Mapping/TreeList')),
        meta: {
          title: 'Distribution Info',
        },
      },
    ],
  },
  {
    path:'/custom-tree',
    Component: lazy(() => import('pages/Mapping/customTree'))
  }
];

export default mapping;
