import Hamburger from "./IconsLeft/Hamburger";
import ShoppingBag from "./IconsLeft/ShoppingBag";
import Search from "./IconsLeft/Search";
import MiddlePanel from "./MiddlePanel/MiddlePanelNav";
interface NavBarI {}

export default function NavBar(): JSX.Element {
  return (
    <section className="grid grid-cols-[20%,1fr,30%] md:grid-cols-[20%,1fr,10%] h-12 col-start-2 w-full row-start-1">
      <div className=" h-full flex justify-evenly items-center">
        <div className="border-b-4 border-transparent">
          Logo
        </div>
      </div>
      <div className="h-full flex items-center">
        <MiddlePanel />
      </div>
      <div className=" h-full flex justify-evenly items-center border-b-4 border-transparent">
        <Search />
        <ShoppingBag />
        <Hamburger />
      </div>
    </section>
  );
}
