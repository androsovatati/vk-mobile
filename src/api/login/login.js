import axios from "axios";
import snakeCaseKeys from "snakecase-keys";
import camelCaseKeys from "camelcase-keys";
import { CLIENT_ID, CLIENT_SECRET } from "../../../keys";

export const login = ({ username, password }) => {
  const params = snakeCaseKeys(
    {
      username,
      password,
      grantType: "password",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
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
