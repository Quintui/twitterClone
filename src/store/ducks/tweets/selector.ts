import { StateType } from "../../store";
import { LoadingState } from "../../commonTypes";
import {AddTweetLoadingState} from "./contracts/types";

export const selectTweets = (state: StateType) => state.tweets;

export const selectTweetsItem = (state: StateType) => selectTweets(state).items;

export const selectLoadingState = (state: StateType): LoadingState =>
  selectTweets(state).loadingState;

export const selectAddTweetState = (state: StateType): AddTweetLoadingState =>
  selectTweets(state).addTweetLoadingState;

export const selectIsTweetLoading = (state: StateType): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsAddTweetStateLoading = (state: StateType): boolean =>
    selectAddTweetState(state) === AddTweetLoadingState.LOADING;

export const selectIsAddTweetStateError = (state: StateType): boolean =>
    selectAddTweetState(state) === AddTweetLoadingState.ERROR;
