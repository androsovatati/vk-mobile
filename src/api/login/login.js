import axios from "axios";
import Config from "react-native-config";
import snakeCaseKeys from "snakecase-keys";
import camelCaseKeys from "camelcase-keys";

export const login = ({ username, password }) => {
  const params = snakeCaseKeys(
    {
      username,
      password,
      grantType: "password",
      clientId: Config.CLIENT_ID,
      clientSecret: Config.CLIENT_SECRET,
      scope: 8258
    },
    { deep: true }
  );
  return axios
    .get("https://oauth.vk.com/token", { params })
    .then(response => camelCaseKeys(response.data))
    .catch(error => {
      if (error.response && error.response.data) {
        throw camelCaseKeys(error.response.data, { deep: true });
      } else {
        throw error;
      }
    });
};
