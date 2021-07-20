import Image from "next/image";
import Link from "next/link";
// import Button from "../Elements/Button";
// import TextCaption from "../Elements/TextCaption";
import {Debounce} from "./../../hooks/Debounce";
import img from "./../../public/assets/mainBanner.jpg";
import {LongBannerI} from "./../../Interfaces/interfaces";

export default function LongBanner({
  url,
  buttonTxt = "Shop",
}: LongBannerI): JSX.Element {
  const widthLimit = Debounce(500);
  return (
    <figure
      className={
        widthLimit
          ? "col-start-2 relative w-full h-[28rem] bg-green-200 mb-2"
          : "col-start-2 relative w-full h-96 bg-green-200 mb-2"
      }
    >
      <Link href="/category">
        <a href="#">
          <Image
            alt="Picture of the author"
            src={img}
            layout="fill"
            objectFit="cover"
            objectPosition={
              widthLimit ? "62% 50%" : "50% 50%"
            }
            quality={100}
          />
        </a>
      </Link>
      {/* <TextCaption
        children={<Button text={buttonTxt} />}
      ></TextCaption> */}
    </figure>
  );
}
