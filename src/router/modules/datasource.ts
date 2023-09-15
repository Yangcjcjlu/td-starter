import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/datasource',
    meta: {
      title: 'Data Source',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: 'list',
        Component: lazy(() => import('pages/Datasource/Base')),
        meta: {
          title: 'Data Source List',
        },
      },
      {
        path: 'card',
        Component: lazy(() => import('pages/Datasource/Card')),
        meta: {
          title: 'Data Source Card',
        },
      },
    ],
  },
  {
    path: '/datasource/form',
    Component: lazy(() => import('pages/Datasource/Form')),
  },
  {
    path: '/datasource/:id/form',
    Component: lazy(() => import('pages/Datasource/Form')),
  },
];

export default result;
