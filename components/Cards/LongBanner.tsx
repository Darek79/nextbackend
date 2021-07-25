import Image from "next/image";
import LinkWrapper from "../Elements/Link";
import Figcaption from "../Elements/Figcaption";
import Button from "./../Elements/Button";
import {Debounce} from "./../../hooks/Debounce";

import {
  LongBannerI,
  LinkCompI,
  FigcaptionI,
  ButtonI,
} from "./../../interfaces/interfaces";

type Mixed = LinkCompI & ButtonI;

interface LongBannerExtendedI
  extends LongBannerI,
    Mixed,
    FigcaptionI {}

export default function LongBanner({
  url = "https://via.placeholder.com/450x150",
  buttonTxt = "",
  sloganTxt,
  msgTxt,
  dscTxt,
  stylingSlogan,
  stylingMsg,
  stylingDsc,
  href,
}: LongBannerExtendedI): JSX.Element {
  const widthLimit = Debounce(500);
  return (
    <figure
      className={
        widthLimit
          ? "col-start-2 relative w-full h-[28rem] mb-2"
          : "col-start-2 relative w-full h-96 mb-2"
      }
    >
      <LinkWrapper href="/category">
        <Image
          alt="Picture of the author"
          src={url}
          layout="fill"
          objectFit="cover"
          objectPosition={
            widthLimit ? "62% 50%" : "50% 50%"
          }
          quality={100}
        />
        <Figcaption
          sloganTxt="BUY ME"
          msgTxt="Lorem Ipsum Lorem Ipsum"
          dscTxt="product description"
          styleWrapper="absolute"
        >
          <Button buttonTxt="Shop" />
        </Figcaption>
      </LinkWrapper>
    </figure>
  );
}
