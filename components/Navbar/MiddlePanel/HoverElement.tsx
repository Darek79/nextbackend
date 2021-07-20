import {BaseI} from "./../../../Interfaces/interfaces";
import class_creator from "./../../../helpers/helpers";
export default function HoverElement({
  children,
  hoverState = "group-hover:h-1/2 group-hover:opacity-100",
  transition = "transform-gpu transition-all delay-100 duration-500",
  bgColor = "bg-mainTheme",
  defaultStyle = "opacity-0 z-40 fixed h-0 w-[calc(100%-20px)] lg:w-[80%] top-12 left-0 hidden md:block md:ml-[10px] lg:ml-[10%]",
}: BaseI): JSX.Element {
  return (
    <div
      className={class_creator(
        hoverState,
        transition,
        bgColor,
        defaultStyle
      )}
    >
      {children}
    </div>
  );
}
// "fixed h-0 w-[calc(100%-20px)] lg:w-[80%] top-12 left-0 hidden
//     md:block md:ml-[10px] lg:ml-[10%] bg-gray-400
//     group-hover:h-1/2 transform-gpu transition-all delay-100 duration-300
//     z-40 group-hover:opacity-100 opacity-0"
