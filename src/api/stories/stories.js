import axios from "axios";
import camelCaseKeys from "camelcase-keys";
import { AsyncStorage } from "react-native";

export const fetchStories = async () => {
  const token = await AsyncStorage.getItem("accessToken");
  return axios
    .get(
      `https://api.vk.com/method/stories.get?v=5.92&extended=1&access_token=${token}`
    )
    .then(({ data }) => camelCaseKeys(data.response, { deep: true }));
};
