import React, {useState, useEffect} from "react";

export function Debounce(widthLimit: number): boolean {
  const [isState, setState] = useState<boolean>(false);
  const delay = (
    fn: React.Dispatch<React.SetStateAction<boolean>>,
    ms: number
  ) => {
    let time: number;
    return () => {
      if (time) {
        clearTimeout(time);
      }
      time = window.setTimeout(() => {
        fn(window.innerWidth < widthLimit);
      }, ms);
    };
  };

  useEffect(() => {
    setState(window.innerWidth < widthLimit);
    const cb = delay(setState, widthLimit);
    window.addEventListener("resize", cb);

    return () => window.removeEventListener("resize", cb);
  }, [widthLimit]);

  return isState;
}
