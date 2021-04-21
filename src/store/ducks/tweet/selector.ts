import { StateType } from "../../store";
import { LoadingState, TweetState } from "./contracts/types";

export const selectTweet = (state: StateType): TweetState => state.tweet;

export const selectTweetData = (state: StateType) => selectTweet(state).data;

export const selectLoadingState = (state: StateType): LoadingState =>
  selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: StateType): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
