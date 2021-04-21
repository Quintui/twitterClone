export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Tweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    userName: string;
    avatarUrl: string;
  };
}

export interface TweetState {
  data?: Tweet;
  loadingState: LoadingState;
}
