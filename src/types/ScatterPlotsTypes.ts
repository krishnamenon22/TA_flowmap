type DataItem = {
  brand: string;
  bandSize: number;
  color: string;
  
};

type SeriesItem = {
  name: string;
  value: (number | string)[];
  
  label: {
    show: boolean;
  };
  itemStyle: {
    color: string;
  };
};

type AxisOptions = {
  type: string;
  data?: string[];
  splitLine?: {
    show?: boolean;
    lineStyle?: {
      type: string;
      color: string;
    };
  };
  name?: string;
};

type SeriesOptions = {
  data: SeriesItem[];
  type: string;
  symbolSize: (data: number[]) => number;
};

export type ChartOptions = {
  title: {
    text: string;
    left: string;
  };
  legend: {
    show: boolean;
    data?: string[];
  };
  grid: {
    left: string;
    right: string;
    bottom: string;
    containLabel: boolean;
  };
  xAxis: AxisOptions;
  yAxis: AxisOptions;
  series: SeriesOptions[];
};