import { LoadingState, TopicState } from "./contracts/types";
import { Action } from "redux";

export enum TopicActionType {
  SET_TOPICS = "tweet/SET_TOPICS",
  FETCH_TOPIC = "tweet/FETCH_TOPIC",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface SetTopicActionType extends Action<TopicActionType> {
  type: TopicActionType.SET_TOPICS;
  payload: TopicState["items"];
}

export interface FetchTopicActionType extends Action<TopicActionType> {
  type: TopicActionType.FETCH_TOPIC;
}

export interface SetTopicLoadingStateInterface {
  type: TopicActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTopicAction = (
  payload: TopicState["items"]
): SetTopicActionType => ({
  type: TopicActionType.SET_TOPICS,
  payload,
});

export const setTopicLoadingState = (
  payload: LoadingState
): SetTopicLoadingStateInterface => ({
  type: TopicActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTopicAction = (): FetchTopicActionType => ({
  type: TopicActionType.FETCH_TOPIC,
});

export type ActionType =
  | SetTopicActionType
  | FetchTopicActionType
  | SetTopicLoadingStateInterface;
