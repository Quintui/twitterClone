import { LoadingState, TweetState } from "./contracts/types";
import produce, { Draft } from "immer";
import { ActionType, TweetActionType } from "./actionCreactors";

const initialTweetState: TweetState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const TweetsReducer = produce(
  (draft: Draft<TweetState>, action: ActionType) => {
    switch (action.type) {
      case TweetActionType.SET_TWEETS:
        draft.items = [];
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case TweetActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case TweetActionType.FETCH_TWEETS:
        draft.loadingState = LoadingState.LOADING;
        break;
      default:
        break;
    }
  },
  initialTweetState
);
