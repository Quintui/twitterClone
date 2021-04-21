import { TopicState } from "./contracts/types";
import produce, { Draft } from "immer";
import { ActionType, TopicActionType } from "./actionCreactors";
import { LoadingState } from "../../commonTypes";

const initialTweetState: TopicState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const TopicReducer = produce(
  (draft: Draft<TopicState>, action: ActionType) => {
    switch (action.type) {
      case TopicActionType.SET_TOPICS:
        draft.items = [];
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case TopicActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case TopicActionType.FETCH_TOPIC:
        draft.loadingState = LoadingState.LOADING;
        break;
      default:
        break;
    }
  },
  initialTweetState
);
