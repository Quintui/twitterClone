import { LoadingState } from "../../../commonTypes";

export enum AddTweetLoadingState {
  CLEAN = "CLEAN",
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
  items: Tweet[];
  loadingState: LoadingState;
  addTweetLoadingState: AddTweetLoadingState;
}
