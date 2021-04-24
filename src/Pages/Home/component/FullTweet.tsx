import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selector";
import { Link, useParams } from "react-router-dom";
import {
  fetchTweetAction,
  setTweetAction,
} from "../../../store/ducks/tweet/actionCreactors";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

export const useFullTweetStyle = makeStyles((theme) =>
  createStyles({
    TweetMainWrapper: {},
    TweetWrapper: {
      padding: "15px 15px 0 15px",
    },
    Avatar: {
      width: "48px",
      height: "48px",
    },

    ActionWrapper: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    },
    ActionIcon: {
      fontSize: 22,
    },
  })
);

const FullTweet = (): React.ReactElement | null => {
  const tweetData = useSelector(selectTweetData);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;
  const classes = useFullTweetStyle();
  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetAction(id));
    }
    return () => {
      dispatch(setTweetAction(undefined));
    };
  }, [dispatch, id]);

  if (!id) {
    return null;
  }

  if (!tweetData) {
    return null;
  }

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/home/tweet/${tweetData._id}`}
        >
          <div className={classes.TweetMainWrapper}>
            <div className={classes.TweetWrapper}>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                  <Avatar
                    className={classes.Avatar}
                    alt="User Avatar"
                    src={tweetData.user.avatarUrl}
                  />
                </div>
                <div>
                  <Typography style={{ marginBottom: 20 }}>
                    {" "}
                    <b style={{ fontSize: 15 }}>
                      {tweetData.user.fullname}
                    </b>{" "}
                    <div>
                      <span style={{ fontSize: 15 }}>
                        @{tweetData.user.userName}
                      </span>
                    </div>
                  </Typography>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: 20 }}>
                  <Typography
                    style={{ fontSize: 23, width: "90%", minHeight: 40 }}
                    variant={"body1"}
                  >
                    {tweetData.text}
                  </Typography>
                </div>
                <Paper
                  style={{
                    borderRight: "none",
                    borderLeft: "none",
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant={"outlined"}
                >
                  <Typography style={{ paddingLeft: 10 }}>
                    <b>12</b> Likes
                  </Typography>
                </Paper>
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
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return null;
};

export default FullTweet;
