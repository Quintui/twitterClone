import { useHomeStyle } from "../style";
import React from "react";
import Tweet from "../../../Components/Tweet/Tweet";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddPost from "../../../Components/AddPostComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweetsAction } from "../../../store/ducks/tweets/actionCreactors";
import {
  selectIsTweetLoading,
  selectTweetsItem,
} from "../../../store/ducks/tweets/selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchTopicAction } from "../../../store/ducks/topic/actionCreactors";
import { Route } from "react-router-dom";
import BackButton from "../../../Components/BackButton/BackButton";
import FullTweet from "./FullTweet";

interface MainPartProps {
  classes: ReturnType<typeof useHomeStyle>;
}

const Main: React.FC<MainPartProps> = ({ classes }): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItem);
  const isLoading = useSelector(selectIsTweetLoading);

  React.useEffect(() => {
    dispatch(fetchTweetsAction());
    dispatch(fetchTopicAction());
  }, [dispatch]);

  return (
    <Grid item xs={6}>
      <Paper className={classes.MainMiddleWrap} variant={"outlined"}>
        <Paper className={classes.MiddleMainHeaderWrap} variant={"outlined"}>
          <Route path={["/home"]} exact>
            <Typography className={classes.MiddleMainHeader} variant={"h6"}>
              Home
            </Typography>
          </Route>
          <Route path={["/home/tweet/:id", "/home/search"]}>
            <BackButton />
            <Typography className={classes.MiddleMainHeader} variant={"h6"}>
              Tweet
            </Typography>
          </Route>
        </Paper>

        <AddPost />

        <div className={classes.ConnectorBar} />
        {isLoading ? (
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <CircularProgress />
          </div>
        ) : (
          <Route path={"/home"} exact>
            {tweets.map((tweet) => (
              <Tweet
                key={tweet._id}
                text={tweet.text}
                _id={tweet._id}
                user={{
                  avatarUrl: tweet.user.avatarUrl,
                  fullname: tweet.user.fullname,
                  userName: tweet.user.userName,
                }}
              />
            ))}
          </Route>
        )}
        <Route path={"/home/tweet/:id"}>
          <FullTweet />
        </Route>
      </Paper>
    </Grid>
  );
};

export default Main;
