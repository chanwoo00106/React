import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default httpClient;
