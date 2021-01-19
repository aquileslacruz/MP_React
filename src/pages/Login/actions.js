import axios from "axios";
import { ROUTES } from "../../constants";

export const login = ({ username, password }) => {
  return axios
    .post(ROUTES.LOGIN, { username, password })
    .then((response) => response.headers)
    .then((headers) => ({ token: headers.Authorization }))
    .catch((error) => ({ errorMsg: error.toJSON().message }));
};
