export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Topic {
  _id: string;
  name: string;
  count: string;
}

export interface TopicState {
  items: Topic[];
  loadingState: LoadingState;
}
