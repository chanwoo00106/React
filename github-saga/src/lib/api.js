import axios from "axios";

export function getGithub(id) {
  return axios.get(`https://api.github.com/users/${id}`);
}
