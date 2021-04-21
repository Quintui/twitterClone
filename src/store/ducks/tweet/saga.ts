import { call, put, takeEvery } from "redux-saga/effects";
import { setTweetAction, setTweetLoadingState } from "./actionCreactors";
import { TweetApi } from "../../../services/api/TweetApi";
import { TweetState } from "./contracts/types";
import { FetchTweetActionType, TweetActionType } from "./contracts/actionsType";
import { LoadingState } from "../../commonTypes";

function* TweetWorker(action: FetchTweetActionType) {
  try {
    const data: Array<TweetState["data"]> = yield call(
      TweetApi.GetTweetData,
      action.payload
    );

    yield put(setTweetAction(data[0]));
  } catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* TweetSagaWacther() {
  yield takeEvery(TweetActionType.FETCH_TWEET_DATA, TweetWorker);
}
