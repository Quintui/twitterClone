import { TweetState } from "./contracts/types";

import {
  FetchTweetActionType,
  SetTweetActionType,
  SetTweetLoadingStateInterface,
  TweetActionType,
} from "./contracts/actionsType";
import { LoadingState } from "../../commonTypes";

export const setTweetAction = (
  payload: TweetState["data"]
): SetTweetActionType => ({
  type: TweetActionType.SET_TWEETS_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetAction = (payload: string): FetchTweetActionType => ({
  type: TweetActionType.FETCH_TWEET_DATA,
  payload,
});
