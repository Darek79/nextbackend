import {ShoppingBagIcon} from "@heroicons/react/outline";
import Link from "next/link";
interface ShoppingBagI {}

export default function ShoppingBag(): JSX.Element {
  return (
    <Link href="/cart">
      <a href="#">
        <ShoppingBagIcon stroke="#1E293B" className="h-6" />
      </a>
    </Link>
  );
}
