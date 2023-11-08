export type AxisOptions = {
  name: string;
  nameLocation:string;
  nameTextStyle: {
    padding: number;
  };
}

export type SeriesData = {
  symbolSize: number;
  data: [number, number][];
  type: string;
  itemStyle ?: {
    color: string;
  };
}

export type GraphicElement = {
  type: string;
  left?: string;
  top?: string;
  style: {
    text: string;
    fill: string;
    font: string;
  };
};
export type optionsProps = {
  xAxis: AxisOptions;
  yAxis: AxisOptions;
  graphic?: GraphicElement[];
  series: SeriesData[];
}


