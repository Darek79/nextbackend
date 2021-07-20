import Link from "next/link";
import HoverElement from "./HoverElement";
interface MenuPanelItemI {
  item?: string;
}

export default function MenuPanelItem({
  item,
}: MenuPanelItemI): JSX.Element {
  return (
    <Link href={`/${item}`}>
      <div
        className="h-full mx-2 px-2 gap-x-2 hover:cursor-pointer group transform-gpu hover:border-b-4
       hover:border-mainTheme border-b-4 border-transparent flex items-center"
      >
        <p className="text-md text-mainTheme">{item}</p>
        <HoverElement />
      </div>
    </Link>
  );
}
