import axios from "axios";
import camelCaseKeys from "camelcase-keys";
import { AsyncStorage } from "react-native";

export const fetchNewsFeed = async () => {
  const token = await AsyncStorage.getItem("accessToken");
  return axios
    .get(
      `https://api.vk.com/method/newsfeed.get?v=5.92&filters=post&access_token=${token}`
    )
    .then(({ data }) => camelCaseKeys(data.response, { deep: true }));
};
