import { Action } from "redux";
import { LoadingState, TweetState } from "./types";

export enum TweetActionType {
  SET_TWEETS_DATA = "tweet/SET_TWEETS_DATA",
  FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface SetTweetActionType extends Action<TweetActionType> {
  type: TweetActionType.SET_TWEETS_DATA;
  payload: TweetState["data"];
}

export interface FetchTweetActionType extends Action<TweetActionType> {
  type: TweetActionType.FETCH_TWEET_DATA;
  payload: string;
}

export interface SetTweetLoadingStateInterface {
  type: TweetActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export type ActionType =
  | SetTweetActionType
  | FetchTweetActionType
  | SetTweetLoadingStateInterface;
