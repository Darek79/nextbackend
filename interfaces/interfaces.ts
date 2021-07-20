export interface BaseI {
  children?: React.ReactNode;
  defaultStyle?: string;
  transition?: string;
  bgColor?: string;
  hoverState?: string;
}

export interface CompPropsI {
  wrapper_style_default?: string;
  wrapper_style_custom?: string;
  children?: React.ReactNode;
}

export interface LongBannerI {
  url?: string;
  buttonTxt?: string;
}

export interface Style {
  styleWrapper?: string;
  styleDefault?: string;
  styleCustom?: string;
}

export interface SVG {
  strokeWidth?: string;
  fill?: string;
  stroke?: string;
  line_class?: string;
  svg_class?: string;
  wrapper_class?: string;
  fnClick?: () => void;
}

export interface Generic {
  default_style?: string;
  custom_style?: string;
  parent_style?: string;
  child_style?: string;
  children?: React.ReactNode;
  path?: string;
  content?: string;
  fnClick?: () => void;
  state?: any;
  hover?: string;
}

export interface NavLinkI {
  path?: string;
}
export interface ImageCardI {
  url?: string;
  path?: string;
  description?: string;
  defaultStyle?: string;
  wrapperStyle?: string;
  position?: string;
}

export type BasketReducerI = {id: string; amount: number}[];
