import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import dashboard from './modules/dashboard';
import datasource from './modules/datasource';
import eventhub from './modules/eventhub';
import form from './modules/form';
import mapping from './modules/mapping';
import distribution from './modules/distribution'
import result from './modules/result'
import trade from './modules/trade';
import login from './modules/login';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/dashboard/statistic',
  },
];

const allRoutes = [...datasource,...mapping,...trade, ...routes,  ...eventhub,...dashboard,...login ];

export default allRoutes;
