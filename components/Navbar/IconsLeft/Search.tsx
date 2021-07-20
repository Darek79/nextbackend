import {SearchIcon} from "@heroicons/react/outline";
import Sidebar from "../../Sidebar/Sidebar";
import Opener from "../../../hooks/Opener";
interface SearchI {}

export default function Search(): JSX.Element {
  const [open, openerFn] = Opener();
  return (
    <>
      <SearchIcon
        stroke="#1E293B"
        className="h-6 hover:cursor-pointer "
        onClick={openerFn}
      />
      <Sidebar
        stateOpen={open}
        stateFn={openerFn}
        h="h-1/4"
        overflow="overflow-hidden"
        turnScrollingOff={false}
        backColor="bg-mainTheme-800"
      >
        <div className="w-full h-full bg-mainTheme-800"></div>
      </Sidebar>
    </>
  );
}
