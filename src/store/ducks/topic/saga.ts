import { call, put, takeEvery } from "redux-saga/effects";
import {
  setTopicAction,
  setTopicLoadingState,
  TopicActionType,
} from "./actionCreactors";
import { TopicApi } from "../../../services/api/TopicApi";
import { TopicState } from "./contracts/types";
import { LoadingState } from "../../commonTypes";

function* TopicWorker() {
  try {
    const data: TopicState["items"] = yield call(TopicApi.GetTopics);

    yield put(setTopicAction(data));
  } catch (e) {
    yield put(setTopicLoadingState(LoadingState.ERROR));
  }
}

export function* TopicSagaWacther() {
  yield takeEvery(TopicActionType.FETCH_TOPIC, TopicWorker);
}
