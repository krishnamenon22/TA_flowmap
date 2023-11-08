export type TooltipOptions = {
  trigger: string;
  axisPointer: {
    type: string;
  };
}

export type XAxisOptions = {
  type: string;
  data: string[];
}

export type YAxisOptions = {
  type: string;
  min?: number  // Set the minimum value
  max?: number,   // Set the maximum value
  axisLable?:{
    rotate:number
  };
  name?:string;
  nameLocation?: string;
  nameTextStyle?: {
    padding?:number[];
  }
}

export type SeriesOptions = {
  name: string;
  type: string;
  stack?: string;
  emphasis?: {
    focus: string;
  };
  data: number[];
  barWidth?: number;
  itemStyle?: {
    color: string // Specify the color for Category A bars
  }
  markLine?: {
    lineStyle: {
      type: string;
      color:string;
    };
  };
}

export type gridOptionProps = {
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    containLabel?: boolean;
    height? : string | number;
}
export type OptionProps ={
  tooltip: TooltipOptions;
  legend: {};
  grid:gridOptionProps[];
  xAxis: XAxisOptions[];
  yAxis: YAxisOptions;
  series: SeriesOptions[];
}
