import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'hooks/useDynamicChart';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'tdesign-react';
import { getLineChartOptions, getPieChartOptions, getTradPieChartOption } from '../chart';
import Style from './MiddleChart.module.less';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { getTradStatisticPieBase, getPieData,getSuccessRatioPie } from '../../../../modules/statistics/base';


const lineOptions = getLineChartOptions();
// const pieOptions = getPieChartOptions();
// const tradPieOptions = getTradPieChartOption();

const MiddleChart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);
  const pageState = useAppSelector(getTradStatisticPieBase);
  const { loading,tradPieOptions } = pageState;
  const { piploading,pieOptions } = pageState
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getPieData({
      }),
     
    );
  }, []);

  useEffect(()=>{
    dispatch(
      getSuccessRatioPie()
    )
  },[])

  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicLineChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
    borderColor: ['series.0.itemStyle.borderColor', 'series.1.itemStyle.borderColor'],
  });

  // console.log("real pieOption==>"+JSON.stringify(pieOptions))

  const dynamicPieChartOption = useDynamicChart(pieOptions, {
    placeholderColor: ['legend.textStyle.color'],
    containerColor: ['series.0.itemStyle.borderColor'],
    textColor: ['label.color', 'label.color'],
  });

  const tradPieChartOption = useDynamicChart(tradPieOptions);

  return (
    <Row gutter={[16, 16]} className={Style.middleChartPanel}>
       <Col xs={12} xl={6}>
        <Card title='Monthly Volume Top 5' subtitle='2023-09' bordered={false}>
          <ReactEcharts option={tradPieChartOption} notMerge={true} lazyUpdate={true} showLoading={loading} />
        </Card>
      </Col>
      <Col xs={12} xl={6}>
        <Card title='Monthly Success Rate' subtitle='2021-12' bordered={false}>
          <ReactEcharts option={dynamicPieChartOption} notMerge={true} lazyUpdate={true} showLoading={piploading} />
        </Card>
      </Col>
     
    </Row>
  );
};

export default React.memo(MiddleChart);
