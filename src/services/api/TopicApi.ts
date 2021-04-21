import { TopicState } from "../../store/ducks/topic/contracts/types";
import axios from "axios";

export const TopicApi = {
  GetTopics(): Promise<TopicState["items"]> {
    return axios.get("/topics").then(({ data }) => data);
  },
};
