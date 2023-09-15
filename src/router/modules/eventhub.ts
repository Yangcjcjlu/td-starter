import { lazy } from 'react';
import { QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/eventhub',
    meta: {
      title: 'Eventhub',
      Icon: QueueIcon,
    },
    children: [
      {
        path: 'sendFile',
        Component: lazy(() => import('pages/Eventhub/SendFile')),
        meta: { title: 'SendFile' },
      },
    ],
  },
];

export default result;
