import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div>
      <IconButton color={"primary"}>
        <ArrowBackIcon onClick={handleGoBack} />
      </IconButton>
    </div>
  );
};

export default BackButton;
