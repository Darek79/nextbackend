import ImgTxtContainer from "./../Organisms/WrapperImgTxt";
import {TwoImagesI} from "../../interfaces/interfaces";

const arr = [{dscTxt: "test"}];

export default function TwoImages({
  boxes = arr,
}: TwoImagesI): JSX.Element {
  return (
    <div>
      <ImgTxtContainer />
      <ImgTxtContainer />
    </div>
  );
}
