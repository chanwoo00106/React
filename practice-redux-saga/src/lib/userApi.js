import axios from "axios";

export function getUser() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
