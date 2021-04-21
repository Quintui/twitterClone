import { call, put, takeEvery } from "redux-saga/effects";
import {
  setTweetAction,
  setTweetsLoadingState,
  TweetActionType,
} from "./actionCreactors";
import { TweetApi } from "../../../services/api/TweetApi";
import { LoadingState, TweetState } from "./contracts/types";

function* TweetWorker() {
  try {
    const data: TweetState["items"] = yield call(TweetApi.GetTweets);

    yield put(setTweetAction(data));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* TweetsSagaWacther() {
  yield takeEvery(TweetActionType.FETCH_TWEETS, TweetWorker);
}
