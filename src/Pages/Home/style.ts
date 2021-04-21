import { createStyles, makeStyles } from "@material-ui/core";

export const useHomeStyle = makeStyles((theme) =>
  createStyles({
    LeftSideBarCont: {
      position: "sticky",
      top: 0,
      maxHeight: 600,
    },
    LeftSideBarList: {
      marginBottom: 25,
      "& li": {
        listStyle: "none",
        marginBottom: 5,
      },

      "& li button": {
        padding: "10px 15px",
        borderRadius: 30,
        color: "#000",
        "&:hover": {
          transition: ".1s all ease-in-out",
          backgroundColor: "rgba(29, 161, 243, 0.1  )",
          color: theme.palette.primary.main,

          "&:svg path": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    buttonStyle: {
      width: 225,
      height: 48,
      borderRadius: 30,
      fontSize: 16,
    },
    LeftSideBarIcon: {
      marginRight: 20,
      fontSize: 26,
    },

    MainMiddleWrap: {
      borderBottom: "none",
      borderTop: "none",
      height: "100%",
    },

    MiddleMainHeaderWrap: {
      borderRight: "none",
      borderLeft: "none",
      display: "flex",
    },
    MiddleMainHeader: {
      fontWeight: 800,
      margin: "10px 15px",
      fontSize: 18,
    },

    ConnectorBar: {
      height: 10,
      width: "100%",
      backgroundColor: "#ebeef0",
    },

    RightSideCont: {
      position: "sticky",
      top: 0,
      maxHeight: 600,
    },
    InputBase: {
      maxWidth: 350,
      width: "100%",
      height: 46,
      backgroundColor: "#ebeef0",
      borderRadius: 30,
      padding: "15px 30px",
      margin: "5px 0 10px 30px",
    },
    TrendsWrapper: {
      width: "100%",
      maxWidth: 350,
      maxHeight: 450,
      backgroundColor: "#fafafa",
      margin: "5px 0 15px 30px",
      borderRadius: 20,
    },
    TrendsHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fafafa",
      borderRight: 0,
      borderLeft: 0,
      borderTop: 0,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      padding: 10,
    },
    TrendsItemHeaderWrap: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 20,
    },
    TrendsItem: {
      backgroundColor: "#fafafa",
      borderRight: 0,
      borderLeft: 0,
      borderTop: 0,
      padding: "12px 16px",
      cursor: "pointer",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "#ebeef0",
      },
    },
    ShowMoreButton: {
      color: theme.palette.primary.main,
      backgroundColor: "#fafafa",
      padding: 16,
      fontSize: 15,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#ebeef0",
      },
    },

    WhoToFollowItem: {
      display: "flex",
    },

    WhoToFollowAvatar: {
      height: 48,
      width: 48,
      marginRight: 10,
    },
    WhoToFollows: {
      display: "flex",
      alignItems: "center",
    },
  })
);
