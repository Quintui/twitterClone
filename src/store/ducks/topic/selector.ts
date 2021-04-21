import { StateType } from "../../store";
import { LoadingState } from "../../commonTypes";

export const selectTopic = (state: StateType) => state.topics;

export const selectTopicItem = (state: StateType) => selectTopic(state).items;

export const selectLoadingState = (state: StateType): LoadingState =>
  selectTopic(state).loadingState;

export const selectIsTopicLoading = (state: StateType): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
