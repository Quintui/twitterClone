import { LoadingState } from "../../../commonTypes";

export interface Topic {
  _id: string;
  name: string;
  count: string;
}

export interface TopicState {
  items: Topic[];
  loadingState: LoadingState;
}
