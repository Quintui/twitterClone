import { createStyles, makeStyles } from "@material-ui/core";

export const useAddPostStyle = makeStyles((theme) =>
  createStyles({
    AddFormWrapper: {
      minHeight: 100,
      padding: "10px 0 10px 20px",
    },
    AddFormTextAreaWrapper: {
      marginBottom: 15,
    },
    AddFormContentWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    AddFormAvatar: {
      width: "48px",
      height: "48px",
    },

    AddFormTextArea: {
      marginTop: 10,
      maxWidth: 500,
      width: "100%",
      border: 0,
      fontSize: 20,
      outline: "none",
      resize: "none",
      fontFamily: "inherit",
    },
    IconButtonsWrapper: {
      display: "flex",
      alignItems: "center",
    },

    AddFormTweetAction: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    CircularProg: {
      marginRight: 10,
      position: "relative",
      width: 20,
      height: 20,
      "& .MuiCircularProgress-root": {
        position: "absolute",
      },
    },
    counter: {
      fontSize: 15,
      marginRight: 10,
    },
  })
);
