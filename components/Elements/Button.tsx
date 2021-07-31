import {create_classes} from "./../../helpers/helpers";
import {ButtonI} from "./../../interfaces/interfaces";

export default function Button({
  buttonTxt = "Lorem Ipsum",
  buttonStylesDefault = "text-light rounded-full",
  buttonBg = "bg-mainTheme",
  buttonPadding = "px-6 py-1.5",
  buttonTextStyling = "tracking-wider",
  buttonMargin,
  disabled = false,
}: ButtonI): JSX.Element {
  return (
    <button
      className={create_classes(
        buttonStylesDefault,
        buttonBg,
        buttonPadding,
        buttonTextStyling,
        buttonMargin
      )}
      disabled={disabled}
    >
      {buttonTxt}
    </button>
  );
}
