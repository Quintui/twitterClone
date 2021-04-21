import { Dialog } from "@material-ui/core";

import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  handleClick: () => void;
}

const ModalComp: FC<IProps> = ({ children, open, handleClick }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="form-dialog-title"
      >
        {children}
      </Dialog>
    </div>
  );
};

export default ModalComp;
