import React, { memo } from 'react';
import TopPanel from './components/TopPanel';
import MiddleChart from './components/MiddleChart';
import LineChart from "./components/LineChart";
import CustomLineChart from "./components/CustomLineChart";
import RankList from './components/RankList';
import Overview from './components/Overview';
import classNames from 'classnames';
import CommonStyle from 'styles/common.module.less';

const DashBoard = () => (
  <div className={classNames(CommonStyle.pageWithSize)} style={{ overflowX: 'hidden' }}>
    {/* <TopPanel /> */}
    <MiddleChart />
    {/* <LineChart/> */}
    <CustomLineChart/>
    {/* <RankList /> */}
    {/* <Overview /> */}
  </div>
);

export default memo(DashBoard);
