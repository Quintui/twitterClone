import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selector";
import Tweet from "../../../Components/Tweet/Tweet";
import { useParams } from "react-router-dom";
import {
  fetchTweetAction,
  setTweetAction,
} from "../../../store/ducks/tweet/actionCreactors";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullTweet = (): React.ReactElement | null => {
  const tweetData = useSelector(selectTweetData);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

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
        <Tweet
          text={tweetData.text}
          _id={tweetData._id}
          user={tweetData.user}
        />
      </div>
    );
  }

  return null;
};

export default FullTweet;
