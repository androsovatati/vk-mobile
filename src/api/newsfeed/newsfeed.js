import axios from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import { AsyncStorage } from "react-native";

export const fetchNewsFeed = async options => {
  const token = await AsyncStorage.getItem("accessToken");
  const params = snakeCaseKeys(
    { ...options, accessToken: token, filters: "post", count: 10, v: "5.92" },
    { deep: true }
  );
  return axios
    .get("https://api.vk.com/method/newsfeed.get", { params })
    .then(({ data }) => camelCaseKeys(data.response, { deep: true }));
};
