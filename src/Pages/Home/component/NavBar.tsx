import React from "react";
import { useHomeStyle } from "../style";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useHandleClick from "../../../hooks/useHandleClick";
import ModalComp from "../../../Components/ModalComp/ModalComp";
import AddPost from "../../../Components/AddPostComponent";
import { Link } from "react-router-dom";
interface NavBarProps {
  classes: ReturnType<typeof useHomeStyle>;
}

const NavBar: React.FC<NavBarProps> = ({ classes }): React.ReactElement => {
  const HandleClick = useHandleClick();

  return (
    <Grid item xs={3}>
      <div className={classes.LeftSideBarCont}>
        <ul className={classes.LeftSideBarList}>
          <li>
            <Link to={"/home"}>
              <IconButton color={"secondary"}>
                <TwitterIcon
                  style={{ fontSize: 28, color: "rgb(29, 161, 243)" }}
                />
              </IconButton>
            </Link>
          </li>
          <li>
            <IconButton color={"default"}>
              <HomeIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Home</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <ExploreIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Explore</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <NotificationsIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Notification</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <MailOutlineIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Message</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <BookmarkBorderIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Bookmarks</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <ListAltIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Lists</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <PersonOutlineIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>Profile</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton color={"default"}>
              <MoreHorizIcon className={classes.LeftSideBarIcon} />
              <Typography variant={"h6"}>More</Typography>
            </IconButton>
          </li>
        </ul>
        <Button
          className={classes.buttonStyle}
          variant="contained"
          color={"primary"}
          onClick={HandleClick.handleClick}
        >
          Tweet
        </Button>
        <ModalComp
          open={HandleClick.open}
          handleClick={HandleClick.handleClick}
        >
          <div style={{ width: 550 }}>
            <AddPost />
          </div>
        </ModalComp>
      </div>
    </Grid>
  );
};

export default NavBar;
