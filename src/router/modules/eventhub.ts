import { lazy } from 'react';
import { AppIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/eventhub',
    meta: {
      title: 'Support Tool ',
      Icon: AppIcon  ,
    },
    children: [
      {
        path: 'sendFile',
        Component: lazy(() => import('pages/Eventhub/SendFile')),
        meta: { title: 'SendFile' },
      },
      {
        path:'index',
        Component: lazy(() => import('pages/Index/Base')),
        meta: { title : 'MergeIndex' }
      },
      {
        path:'trade',
        Component: lazy(()=> import('pages/Trade/Base')),
        meta: { title : 'Trade Lifecycle'}
      }
    ],
  },
];

export default result;
