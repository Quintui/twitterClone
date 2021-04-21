import { LoadingState, TweetState } from "./contracts/types";
import produce, { Draft } from "immer";

import { ActionType, TweetActionType } from "./contracts/actionsType";

const initialTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const TweetReducer = produce(
  (draft: Draft<TweetState>, action: ActionType) => {
    switch (action.type) {
      case TweetActionType.SET_TWEETS_DATA:
        draft.data = undefined;
        draft.data = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;
      case TweetActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;
      case TweetActionType.FETCH_TWEET_DATA:
        draft.loadingState = LoadingState.LOADING;
        break;
      default:
        break;
    }
  },
  initialTweetState
);
