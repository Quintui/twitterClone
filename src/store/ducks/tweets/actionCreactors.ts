import { AddTweetLoadingState, Tweet, TweetState } from "./contracts/types";
import {
  AddTweetActionType,
  AddTweetLoadingStateType,
  FetchAddTweetType,
  FetchTweetsActionType,
  SetTweetsActionType,
  SetTweetsLoadingStateInterface,
  TweetActionType,
} from "./contracts/actionTypes";
import { LoadingState } from "../../commonTypes";

export const setTweetAction = (
  payload: TweetState["items"]
): SetTweetsActionType => ({
  type: TweetActionType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetsAction = (): FetchTweetsActionType => ({
  type: TweetActionType.FETCH_TWEETS,
});

export const addTweetAction = (payload: Tweet): AddTweetActionType => ({
  type: TweetActionType.ADD_TWEET,
  payload,
});

export const addTweetLoadingStateType = (
  payload: AddTweetLoadingState
): AddTweetLoadingStateType => ({
  type: TweetActionType.ADD_TWEET_LOADING_STATE,
  payload,
});

export const fetchAddTweetAction = (payload: string): FetchAddTweetType => ({
  type: TweetActionType.FETCH_ADD_TWEET,
  payload,
});
