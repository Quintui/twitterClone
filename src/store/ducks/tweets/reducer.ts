import {AddTweetLoadingState, TweetState} from "./contracts/types";
import produce, {Draft} from "immer";
import {ActionType, TweetActionType} from "./contracts/actionTypes";
import {LoadingState} from "../../commonTypes";

const initialTweetState: TweetState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addTweetLoadingState: AddTweetLoadingState.NEVER,
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
            case TweetActionType.FETCH_ADD_TWEET:
                draft.addTweetLoadingState = AddTweetLoadingState.LOADING;
                break;
            case TweetActionType.ADD_TWEET_LOADING_STATE:
                draft.addTweetLoadingState = action.payload
                break;
            case TweetActionType.ADD_TWEET:
                const data = action.payload;
                if (data) {
                    draft.addTweetLoadingState = AddTweetLoadingState.CLEAN;
                    draft.items.push(action.payload);
                }

                break;
            default:
                break;
        }
    },
    initialTweetState
);
