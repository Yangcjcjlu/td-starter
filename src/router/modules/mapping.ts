import { lazy } from 'react';
import { ShareIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const mapping: IRouter[] = [
  {
    path: '/mapping',
    meta: {
      title: 'Distribution',
      Icon: ShareIcon,
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
  // {
  //   path:'/custom-tree',
  //   Component: lazy(() => import('pages/Mapping/customTree'))
  // }
];

export default mapping;
