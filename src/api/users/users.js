import axios from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import { AsyncStorage } from "react-native";

export const fetchUsers = async ({ userIds, fields, nameCase }) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const params = snakeCaseKeys({
    userIds,
    fields,
    nameCase,
    accessToken,
    v: 5.92
  });
  return axios
    .get(`https://api.vk.com/method/users.get`, { params })
    .then(({ data }) => camelCaseKeys(data.response, { deep: true }));
};
