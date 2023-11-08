export type textStyleObject = {
  fontSize?: number;
  fontWeight?: string | number;
  color?: string;
}

export type TitleObject = {
  text?: string;
  x?: string;
  left?: number;
  textStyle?: textStyleObject;
}

export type axisTickObject = {
  alignWithLabel?: boolean;
}

export type legendDataObject = {
  name?: string;
  icon?: string;
}

export type legendObject = {
  show?: boolean;
  top?: number;
  data?: legendDataObject;
  itemHeight?: number;
  textStyle?: textStyleObject;
  icon?:string;
  itemGap?: number;
  itemWidth?: number;
}

export type gridObject = {
  y?: number;
  y2?: number;
}

export type axisLabelObject = {
  interval?: number;
  rotate?: number;
  color?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: number;
}

export type nameTextStyleObject = {
  color?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: number;
  nameRotate?: number;
}

export type XAxisObject = {
  type?: string;
  data?: any;
  axisTick?: axisTickObject;
  axisLabel?: axisLabelObject;
  show?: boolean;
  name?: string;
  nameLocation?: string;
  nameGap?: number;
  nameTextStyle?: nameTextStyleObject;
}

export type YAxisObject = {
  show?: boolean;
  position?: string;
  offset?: number;
  type?: string;
  name?: string;
  data?: any;
  axisLabel?: axisLabelObject;
  nameLocation?: string;
  nameGap?: number;
  nameTextStyle?: nameTextStyleObject;
}

export type labelDataseries = {
  color: string;
}

export type itemStyle = {
  color: string;
}

export type DataSeries = {
  name?: string;
  type?: string;
  stack?: string;
  data?: any;
  barWidth?: string;
  label?: labelDataseries;
  itemStyle?: itemStyle;
}

export type ChartDataMulti = {
  title: TitleObject;
  grid?: gridObject;
  legend?: legendObject;
  xAxis: XAxisObject;
  yAxis: YAxisObject;
  series: DataSeries[];
}