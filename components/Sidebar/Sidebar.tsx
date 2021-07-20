import {Fragment, useEffect} from "react";
import class_creator from "./../../helpers/helpers";
interface SidebarI {
  stateOpen?: boolean;
  stateFn?: () => void;
  children?: React.ReactNode;
  defaultStyle?: string;
  sideStart?: string;
  sideEnd?: string;
  backColor?: string;
  delayDuration?: string;
  bgColor?: string;
  w?: string;
  h?: string;
  overflow?: string;
  turnScrollingOff?: boolean;
}

export default function Sidebar({
  stateOpen,
  stateFn,
  children,
  w = "w-screen",
  h = "h-screen",
  defaultStyle = "fixed top-0 z-50 transform-gpu",
  sideStart = "right-0 translate-x-0",
  sideEnd = "translate-x-full",
  delayDuration = "delay-100 duration-300",
  bgColor = "bg-gray-100",
  overflow = "overflow-scroll",
  turnScrollingOff = true,
}: SidebarI): JSX.Element {
  useEffect(() => {
    if (stateOpen && turnScrollingOff) {
      window.document.body.style.overflow = "hidden";
      return;
    }
    window.document.body.style.overflowY = "auto";
  }, [stateOpen]);
  return (
    <Fragment>
      {stateOpen ? (
        <div
          className={class_creator(
            defaultStyle,
            sideStart,
            delayDuration,
            bgColor,
            overflow,
            w,
            h
          )}
          onClick={stateFn}
        >
          {children}
        </div>
      ) : (
        <div
          className={class_creator(
            defaultStyle,
            sideEnd,
            delayDuration,
            bgColor,
            w,
            h
          )}
        ></div>
      )}
    </Fragment>
  );
}

//"fixed top-0 right-0 z-50 w-screen h-screen bg-yellow-200 transform-gpu translate-x-0 delay-100 duration-300 overflow-scroll"
