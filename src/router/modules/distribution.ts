import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/distribution',
    meta: {
      title: 'Distribution',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: '/DistributeBase',
        Component: lazy(() => import('pages/Distribution/Base')),
        meta: {
          title: 'Distribute Base',
        },
      },
      {
        path: '/DistributeStep',
        Component: lazy(() => import('pages/Distribution/Step')),
        meta: {
          title: 'Distribute Step',
        },
      },
    ],
  },
];

export default result;
