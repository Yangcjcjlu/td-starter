import LastWeekDatePicker from 'components/DatePicker';
import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'tdesign-react';
import { getCustomLineChartOptions } from '../chart';
import Style from './CustomeLineChart.module.less';
// import { getLineChartOptions, getPieChartOptions, getTradPieChartOption } from '../chart';
// import Style from './MiddleChart.module.less';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { getLineData,getTradLineBase,retrigger } from '../../../../modules/statistics/line';
import dayjs from 'dayjs';


// const lineOptions = getCustomLineChartOptions();

const customlineChart = () => {
  // const [customOptions, setCustomOptions] = useState(lineOptions);
  const pageState = useAppSelector(getTradLineBase);
  const { customOptions } = pageState;
  const dispatch = useAppDispatch();

  const RECENT_7_DAYS: any = [
    dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
  ];

  useEffect(() => {
    dispatch(
      getLineData({
        startDate:RECENT_7_DAYS[0],
        endDate:RECENT_7_DAYS[1]
      }),
    );
  }, []);

  // console.log("customer==>"+JSON.stringify(lineOptions));

  const onTimeChange = (value: Array<string>) => {
      let params = {
        startDate:value[0],
        endDate:value[1]
      }
      dispatch(getLineData(params));
    // const options = getCustomLineChartOptions(value);
    // setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });

  return (
    <Row gutter={[16, 16]} className={Style.customlineChartPanel}>
      <Col xs={12} xl={12}>
        <Card title='Data Count' subtitle='(rows)' actions={LastWeekDatePicker(onTimeChange)} bordered={false}>
          <ReactEcharts option={dynamicLineChartOption} notMerge={true} lazyUpdate={false} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(customlineChart);
