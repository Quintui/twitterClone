import { LoadingState, TweetState } from "./contracts/types";
import { Action } from "redux";

export enum TweetActionType {
  SET_TWEETS = "tweet/SET_TWEETS",
  FETCH_TWEETS = "tweet/FETCH_TWEETS",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface SetTweetsActionType extends Action<TweetActionType> {
  type: TweetActionType.SET_TWEETS;
  payload: TweetState["items"];
}

export interface FetchTweetsActionType extends Action<TweetActionType> {
  type: TweetActionType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateInterface {
  type: TweetActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

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

export type ActionType =
  | SetTweetsActionType
  | FetchTweetsActionType
  | SetTweetsLoadingStateInterface;
