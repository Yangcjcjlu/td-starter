import LastWeekDatePicker from 'components/DatePicker';
import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import React, { useState } from 'react';
import { Card, Col, Row } from 'tdesign-react';
import { getCustomLineChartOptions } from '../chart';
import Style from './CustomeLineChart.module.less';

const lineOptions = getCustomLineChartOptions();

const customlineChart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);

  const onTimeChange = (value: Array<string>) => {
    const options = getCustomLineChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });

  return (
    <Row gutter={[16, 16]} className={Style.customlineChartPanel}>
      <Col xs={12} xl={12}>
        <Card title='统计数据' subtitle='(万元)' actions={LastWeekDatePicker(onTimeChange)} bordered={false}>
          <ReactEcharts option={dynamicLineChartOption} notMerge={true} lazyUpdate={false} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(customlineChart);
