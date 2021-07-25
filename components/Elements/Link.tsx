import {LinkCompI} from "./../../interfaces/interfaces";
import Link from "next/link";

export default function LinkComp({
  children,
  href = "#",
}: LinkCompI): JSX.Element {
  return (
    <Link href={href}>
      <a href="#">{children}</a>
    </Link>
  );
}
