import { lazy } from 'react';
import { QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/eventhub',
    meta: {
      title: 'Supported Tool ',
      Icon: QueueIcon,
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
        meta: { title : 'merge index' }
      }
    ],
  },
];

export default result;
