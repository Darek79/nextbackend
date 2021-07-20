import MenuPanelItem from "./MiddlePanelItem";
interface MiddlePanelNavI {
  menuItems?: string[];
}

const menu: string[] = [
  "Men",
  "Women",
  "Kids",
  "Sale",
  "New Collection",
];

export default function MiddlePanelNav({
  menuItems,
}: MiddlePanelNavI): JSX.Element {
  return (
    <div className="w-full h-full hidden md:flex items-center text-md">
      {menu.map((el) => (
        <MenuPanelItem item={el} key={el} />
      ))}
    </div>
  );
}
