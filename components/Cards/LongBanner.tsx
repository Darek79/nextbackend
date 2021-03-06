import Image from "next/image";
import {showStyleTernary} from "./../../helpers/helpers";
import LinkWrapper from "../Elements/Link";
import Figcaption from "../Elements/Figcaption";
import Button from "./../Elements/Button";
import {Debounce} from "./../../hooks/Debounce";

import {BannerExtendedI} from "./../../interfaces/interfaces";

export default function LongBanner({
  imgUrl = "https://via.placeholder.com/450x150",
  buttonTxt = "",
  buttonMargin,
  sloganTxt,
  msgTxt,
  dscTxt,
  stylingSlogan,
  stylingMsg,
  stylingDsc,
  styleWrapper,
  href,
}: BannerExtendedI): JSX.Element {
  const widthLimit = Debounce(500);
  return (
    <figure
      className={showStyleTernary(
        widthLimit,
        "col-start-2 relative w-full h-[28rem] mb-2",
        "col-start-2 relative w-full h-96 mb-2"
      )}
    >
      <LinkWrapper href="/category">
        <Image
          alt="Picture of the author"
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition={
            widthLimit ? "62% 50%" : "50% 50%"
          }
          quality={100}
        />
        <Figcaption
          sloganTxt={sloganTxt}
          stylingSlogan={stylingSlogan}
          stylingMsg={stylingMsg}
          msgTxt={msgTxt}
          dscTxt={dscTxt}
          stylingDsc={stylingDsc}
          styleWrapper={styleWrapper}
        >
          <Button
            buttonMargin={buttonMargin}
            buttonTxt={buttonTxt}
          />
        </Figcaption>
      </LinkWrapper>
    </figure>
  );
}
