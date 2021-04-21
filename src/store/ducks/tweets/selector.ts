import { StateType } from "../../store";
import { LoadingState } from "../../commonTypes";

export const selectTweets = (state: StateType) => state.tweets;

export const selectTweetsItem = (state: StateType) => selectTweets(state).items;

export const selectLoadingState = (state: StateType): LoadingState =>
  selectTweets(state).loadingState;

export const selectIsTweetLoading = (state: StateType): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
