import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';
import 'tdesign-react/es/style/index.css';
import './styles/index.less';
import merge from 'lodash/merge';
import enConfig from 'tdesign-react/es/locale/en_US';
import { ConfigProvider, Space } from 'tdesign-react';

const env = import.meta.env.MODE || 'development';
const baseRouterName = env === 'site' ? '/starter/react/' : '';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('app')!;

// 全局特性配置，引入英文语言配置包 enConfig
const globalConfig = merge(enConfig, {
  // 可以在此处定义更多自定义配置，具体可配置内容参看 API 文档
  calendar: {},
  table: {},
  pagination: {},
  // 全局动画设置
  animation: { exclude: [] },
});

const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <ConfigProvider globalConfig={globalConfig}>
      <Provider store={store}>
        <BrowserRouter basename={baseRouterName}>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>,
  );
};

renderApp();
