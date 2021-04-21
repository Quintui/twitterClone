import { all } from "redux-saga/effects";
import { TweetsSagaWacther } from "./ducks/tweets/saga";
import { TopicSagaWacther } from "./ducks/topic/saga";
import { TweetSagaWacther } from "./ducks/tweet/saga";

export default function* rootSaga() {
  yield all([TweetsSagaWacther(), TopicSagaWacther(), TweetSagaWacther()]);
}
