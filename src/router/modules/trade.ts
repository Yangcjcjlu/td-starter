import { lazy } from 'react';
import { BooksIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/trade',
    meta: {
      title: 'Trade lifecycle Trace',
      Icon: BooksIcon ,
    },
    children: [
      {
        path:'',
        Component: lazy(()=> import('pages/Trade/Base')),
        meta: { title : 'Trade Lifecycle'}
      }
    ],
  },
];

export default result;
