import {create_classes} from "../../helpers/helpers";
import {FigcaptionI} from "./../../interfaces/interfaces";

export default function Figcaption({
  children,
  stylingSlogan = "text-2xl mb-2 font-bold tracking-wider",
  stylingMsg = "",
  stylingDsc = "text-gray-500",
  sloganTxt = "BUY ME",
  msgTxt = "Lorem Ipsum Lorem Ipsum",
  dscTxt = "product description",
  styleWrapper,
  styleCustom,
}: FigcaptionI): JSX.Element {
  return (
    <figcaption
      className={create_classes(styleWrapper, styleCustom)}
    >
      <p className={stylingSlogan}>{sloganTxt}</p>
      <p className={stylingMsg}>{msgTxt}</p>
      <p className={stylingDsc}>{dscTxt}</p>
      {children}
    </figcaption>
  );
}
