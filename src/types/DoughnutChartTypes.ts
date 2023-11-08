export type TooltipOptions = {
  trigger: string;
  
}
export type Title = {
  text: string;
  top: string;
  left: string;
  textStyle: {
    fontSize: number;
    rich: {
      a: {
        fontWeight: string,
      },
      b: {
        fontWeight: string,
      },
    },
  },
}
export type LegendProps = {
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  top? : string | number;
  orient? : string | number;
}
export type DataItem = {
  value: number;
  name: string;
  itemStyle: { color: string }
}

export type SeriesOptions = {
  name: string;
  type: string;
  radius?: string[];
  avoidLabelOverlap?: boolean;
  label: {
    show: boolean;
    position:string;
    color: string;
    formatter:string;
  };
  emphasis?: {
    label: {
      show: boolean;
      fontSize: number;
      fontWeight:string;
    };
  };
  labelLine:{
    show: boolean;
  },
  data: DataItem[];
  
}

export type DoughnutOptionProps ={
  title: Title;
  tooltip: TooltipOptions;
  legend: LegendProps;
  
  series: SeriesOptions[];
}