import { TweetState } from "../../store/ducks/tweets/contracts/types";
import axios from "axios";

export const TweetApi = {
  GetTweets(): Promise<TweetState["items"]> {
    return axios.get("/tweets").then(({ data }) => data);
  },
  GetTweetData(id: string): Promise<TweetState["items"]> {
    return axios.get("/tweets?_id=" + id).then(({ data }) => data);
  },
};
