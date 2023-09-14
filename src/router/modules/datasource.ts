import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/datasource',
    meta: {
      title: 'data source page',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: 'list',
        Component: lazy(() => import('pages/Datasource/Base')),
        meta: {
          title: 'data source list',
        },
      },
      {
        path: 'card',
        Component: lazy(() => import('pages/Datasource/Card')),
        meta: {
          title: 'data source card',
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
