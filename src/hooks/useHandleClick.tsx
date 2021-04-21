import { useState } from "react";

const useHandleClick = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return { handleClick, open };
};

export default useHandleClick;
