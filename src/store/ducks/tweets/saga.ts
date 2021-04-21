import { call, put, takeEvery } from "redux-saga/effects";
import {
  addTweetAction,
  addTweetLoadingStateType,
  setTweetAction,
  setTweetsLoadingState,
} from "./actionCreactors";
import { TweetApi } from "../../../services/api/TweetApi";
import { AddTweetLoadingState, Tweet, TweetState } from "./contracts/types";
import { FetchAddTweetType, TweetActionType } from "./contracts/actionTypes";
import { LoadingState } from "../../commonTypes";

function* TweetWorker() {
  try {
    const data: TweetState["items"] = yield call(TweetApi.GetTweets);

    yield put(setTweetAction(data));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}
function* AddTweetWorker({ payload }: FetchAddTweetType) {
  try {
    const tweetData: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Test Name",
        userName: "testUser",
        avatarUrl: "https://source.unsplash.com/random/100x100?5",
      },
    };
    const item: Tweet = yield call(TweetApi.PostTweetData, tweetData);
    yield put(addTweetAction(item));
  } catch (e) {
    yield put(addTweetLoadingStateType(AddTweetLoadingState.ERROR));
  }
}

export function* TweetsSagaWacther() {
  yield takeEvery(TweetActionType.FETCH_TWEETS, TweetWorker);
  yield takeEvery(TweetActionType.FETCH_ADD_TWEET, AddTweetWorker);
}
