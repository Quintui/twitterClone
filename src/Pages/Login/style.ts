import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useLoginStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      height: "100vh",
      width: "100%",
    },
    leftSide: {
      backgroundColor: "#009ae3",
      flex: "0 0 55%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    leftSideIcon: {
      height: 300,
      width: 300,
      color: "#fff",
    },
    rightSide: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      flex: "0 0 45%",
    },
    rightSideWrapper: {
      margin: 40,
      display: "flex",
      flexDirection: "column",
    },
    rightSideMainHeader: {
      color: "#000",
      fontSize: 64,
      margin: "48px 0",
      fontWeight: 700,
    },
    rightSideSecondlyHeader: {
      color: "#000",
      fontSize: 31,
      marginBottom: 32,
      fontWeight: 700,
    },
    rightBird: {
      fontSize: 55,
      marginBottom: 12,
      color: "rgb(29, 161, 242)",
    },
    buttonStyle: {
      marginBottom: 20,
      width: 300,
    },

    ModalBird: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
