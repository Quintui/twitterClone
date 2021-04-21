import { Action } from "redux";
import { AddTweetLoadingState, Tweet, TweetState } from "./types";
import { LoadingState } from "../../../commonTypes";

export enum TweetActionType {
  SET_TWEETS = "tweet/SET_TWEETS",
  FETCH_TWEETS = "tweet/FETCH_TWEETS",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
  FETCH_ADD_TWEET = "tweet/FETCH_ADD_TWEET",
  ADD_TWEET = "tweet/ADD_TWEET",
  ADD_TWEET_LOADING_STATE = '"tweet/ADD_TWEET_LOADING_STATE',
}

export interface SetTweetsActionType extends Action<TweetActionType> {
  type: TweetActionType.SET_TWEETS;
  payload: TweetState["items"];
}

export interface FetchTweetsActionType extends Action<TweetActionType> {
  type: TweetActionType.FETCH_TWEETS;
}

export interface FetchAddTweetType extends Action<TweetActionType> {
  type: TweetActionType.FETCH_ADD_TWEET;
  payload: string;
}
export interface AddTweetActionType extends Action<TweetActionType> {
  type: TweetActionType.ADD_TWEET;
  payload: Tweet;
}
export interface AddTweetLoadingStateType extends Action<TweetActionType> {
  type: TweetActionType.ADD_TWEET_LOADING_STATE;
  payload: AddTweetLoadingState;
}

export interface SetTweetsLoadingStateInterface {
  type: TweetActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export type ActionType =
  | SetTweetsActionType
  | FetchTweetsActionType
  | SetTweetsLoadingStateInterface
  | FetchAddTweetType
  | AddTweetActionType
  | AddTweetLoadingStateType;
