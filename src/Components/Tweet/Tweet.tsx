import React, { FC } from "react";
import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";

interface TweetProps {
  text: string | null;
  _id: string | null;
  user: {
    fullname: string | null;
    userName: string | null;
    avatarUrl: string;
  };
}

export const useTweetStyle = makeStyles((theme) =>
  createStyles({
    TweetMainWrapper: {
      "&:hover": {
        backgroundColor: "#f5f5f5",
        transition: ".2s all ease-in-out",
      },
    },
    TweetWrapper: {
      width: "100%",
      display: "flex",
      paddingLeft: 20,
      paddingTop: 15,
    },
    Avatar: {
      width: "48px",
      height: "48px",
    },

    ActionWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "85%",
      marginLeft: -12,
    },
    ActionIcon: {
      fontSize: "18.75px",
    },
  })
);

const Tweet: FC<TweetProps> = ({ text, user, _id }): React.ReactElement => {
  const classes = useTweetStyle();
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={`/home/tweet/${_id}`}
    >
      <Grid className={classes.TweetMainWrapper} container>
        <div className={classes.TweetWrapper}>
          <Grid style={{ marginRight: 10 }} item xs={1}>
            <Avatar
              className={classes.Avatar}
              alt="User Avatar"
              src={user.avatarUrl}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ margin: 0 }}>
              {" "}
              <b style={{ fontSize: 15 }}>{user.fullname}</b>{" "}
              <span style={{ fontSize: 15 }}> @{user.userName}</span>
            </Typography>
            <Typography
              style={{ fontSize: 15, width: "90%", minHeight: 40 }}
              variant={"body1"}
            >
              {text}
            </Typography>
            <div className={classes.ActionWrapper}>
              <div>
                <IconButton color={"primary"}>
                  <ChatBubbleOutlineIcon className={classes.ActionIcon} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color={"primary"}>
                  <RepeatIcon className={classes.ActionIcon} />
                </IconButton>
              </div>
              <div>
                <IconButton color={"primary"}>
                  <FavoriteBorderIcon className={classes.ActionIcon} />
                </IconButton>
              </div>
              <div>
                <IconButton color={"primary"}>
                  <ShareIcon className={classes.ActionIcon} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </Link>
  );
};

export default Tweet;
