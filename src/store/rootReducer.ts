import { combineReducers } from "redux";
import { TweetsReducer } from "./ducks/tweets/reducer";
import { TopicReducer } from "./ducks/topic/reducer";
import { TweetReducer } from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
  tweets: TweetsReducer,
  topics: TopicReducer,
  tweet: TweetReducer,
});
