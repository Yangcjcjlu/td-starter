import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/login/index',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    // meta: {
    //   title: '登录页',
    //   Icon: LogoutIcon,
    // },
    // children: [
    //   {
    //     path: 'index',
        
    //     isFullPage: true,
    //     meta: {
    //       title: '登录中心',
    //     },
    //   },
    // ],
  },
];

export default result;
