import {useState} from "react";

export default function Opener(): [boolean, () => void] {
  const [open, setOpen] = useState(false);

  function openerFn() {
    setOpen((p) => !p);
  }

  return [open, openerFn];
}
