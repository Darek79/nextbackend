import {GridWrapperI} from "./../../interfaces/interfaces";

export default function GridWrapper({
  children,
}: GridWrapperI): JSX.Element {
  return (
    <section className="grid grid-cols-mobile lg:grid-cols-desktop grid-rows-default ">
      {children}
    </section>
  );
}
