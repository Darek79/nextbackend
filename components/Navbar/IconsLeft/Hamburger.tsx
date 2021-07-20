import {useState} from "react";
import {MenuAlt2Icon} from "@heroicons/react/outline";
import Sidebar from "../../Sidebar/Sidebar";

interface HamburgerI {}

export default function Hamburger(): JSX.Element {
  const [open, openerFn] = useState(false);

  const openClick = () => openerFn((p) => !p);
  return (
    <>
      <MenuAlt2Icon
        stroke="#1E293B"
        className="h-6 block md:hidden "
        onClick={openClick}
      />
      <Sidebar stateOpen={open} stateFn={openClick}>
        <div className="w-full h-[300px] bg-gray-600"></div>
        <div className="w-full h-[1000px] bg-gray-300"></div>
      </Sidebar>
    </>
  );
}
