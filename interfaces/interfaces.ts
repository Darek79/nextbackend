import {
  LinkHTMLAttributes,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

export interface BaseI {
  children?: ReactNode;
  defaultStyle?: string;
  transition?: string;
  bgColor?: string;
  hoverState?: string;
}
export interface FigcaptionI extends StyleWrapper {
  children?: ReactNode;
  stylingSlogan?: string;
  stylingMsg?: string;
  stylingDsc?: string;
  sloganTxt?: string;
  msgTxt?: string;
  dscTxt?: string;
}

export interface ButtonI
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTxt?: string;
  buttonStylesDefault?: string;
  buttonBg?: string;
  buttonPadding?: string;
  buttonTextStyling?: string;
}

export interface GridWrapperI {
  children: React.ReactNode;
}

export interface CompPropsI {
  wrapper_style_default?: string;
  wrapper_style_custom?: string;
  children?: React.ReactNode;
}

export interface LinkCompI
  extends LinkHTMLAttributes<HTMLLinkElement> {
  children?: ReactNode;
}

export interface LongBannerI {
  url?: any;
}

export interface StyleWrapper {
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
