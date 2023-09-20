import type { EChartOption } from 'echarts';
import { getChartDataSet, ONE_WEEK_LIST ,getLineChartList } from 'utils/chart';


export const getCustomLineChartOptions =(dateTime: Array<string> = []):EChartOption => {
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime); 
  
  return {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
};

export const getLineChartOptions = (dateTime: Array<string> = []): EChartOption => {
  // const [timeArray, inArray, outArray] = getChartDataSet(dateTime);
  const [timeArray, inArray, outArray] = getLineChartList(dateTime);
  return {
    tooltip: {
      trigger: 'item',
    },
    grid: {
      left: '0',
      right: '20px',
      top: '5px',
      bottom: '36px',
      containLabel: true,
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal', // legend 横向布局。
      data: ['Present', 'Last Month'],
      textStyle: {
        fontSize: 12,
      },
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Present',
        data: outArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 1,
        },
        areaStyle: {
          color: '#0053D92F',
        },
      },
      {
        name: 'Last Month',
        data: inArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 1,
        },
      },
    ],
  };
};

export const getPieChartOptions = (radius = 42): EChartOption => ({
  tooltip: {
    trigger: 'item',
  },
  grid: {
    top: '0',
    right: '0',
  },
  legend: {
    itemWidth: 12,
    itemHeight: 4,
    textStyle: {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.35)'
    },
    left: 'center',
    bottom: '0',
    orient: 'horizontal', // legend 横向布局。
  },
  series: [
    {
      name: 'Data Count',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      silent: false,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff'
      },
      label: {
        show: false,
        position: 'center',
        formatter: ['{value|{d}%}', '{name|{b}}'].join('\n'),
        rich: {
          value: {
            fontSize: 28,
            fontWeight: 'normal',
            lineHeight: 46,
          },
          name: {
            color: '#909399',
            fontSize: 12,
            lineHeight: 14,
          },
        },
      },
      emphasis: {
        label: {
          show: true,
        }
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Present' },
        { value: 1048 * 7, name: 'History' },
      ],
    },
  ],
});

export const getBarChartOptions = (dateTime: Array<string> = []): EChartOption => {
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime);
  return {
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      axisLine: {
        lineStyle: {
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: '5%',
      left: '25px',
      right: 0,
      bottom: '60px',
    },
    legend: {
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 4,
      itemGap: 48,
      textStyle: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.6)',
      },
      left: 'center',
      bottom: '0',
      orient: 'horizontal',
      data: ['Present', 'Last Month'],
    },
    series: [
      {
        name: 'Present',
        data: outArray,
        type: 'bar',
      },
      {
        name: 'Last Month',
        data: inArray,
        type: 'bar',
      },
    ],
  };
};

export const getTradPieChartOption = (data = 0): EChartOption => ({
  title: {
      text: 'Data Source Distribution',
      subtext: 'Data Source',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
     
    ]
  }
);

// PieChartIcon Data
export const MICRO_CHART_OPTIONS_LINE: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  color: ['#fff'],
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      showSymbol: false,
    },
  ],
};

// BarChartIcon Data
export const MICRO_CHART_OPTIONS_BAR: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  series: [
    {
      data: [
        100,
        130,
        184,
        218,
        {
          value: 135,
          itemStyle: {
            opacity: 0.2,
          },
        },
        {
          value: 118,
          itemStyle: {
            opacity: 0.2,
          },
        },
        {
          value: 60,
          itemStyle: {
            opacity: 0.2,
          },
        },
      ],
      type: 'bar',
      barWidth: 9,
    },
  ],
};
