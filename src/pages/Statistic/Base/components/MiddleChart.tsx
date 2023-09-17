import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import React, { useState } from 'react';
import { Card, Col, Row } from 'tdesign-react';
import { getLineChartOptions, getPieChartOptions, getTradPieChartOption } from '../chart';
import Style from './MiddleChart.module.less';

const lineOptions = getLineChartOptions();
const pieOptions = getPieChartOptions();
const tradPieOptions = getTradPieChartOption();

const MiddleChart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);

  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });

  const dynamicPieChartOption = useDynamicChart(pieOptions, {
    placeholderColor: ['legend.textStyle.color'],
    containerColor: ['series.0.itemStyle.borderColor'],
    textColor: ['label.color', 'label.color'],
  });

  const tradPieChartOption = useDynamicChart(tradPieOptions);

  return (
    <Row gutter={[16, 16]} className={Style.middleChartPanel}>
      <Col xs={12} xl={6}>
        <Card title='Data Count' subtitle='2021-12' bordered={false}>
          <ReactEcharts option={dynamicPieChartOption} notMerge={true} lazyUpdate={true} showLoading={false} />
        </Card>
      </Col>
      <Col xs={12} xl={6}>
        <Card title='Data Source' subtitle='2023-09' bordered={false}>
          <ReactEcharts option={tradPieChartOption} notMerge={true} lazyUpdate={true} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
