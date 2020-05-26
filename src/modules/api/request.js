import axios from "axios";
import endpoints from "./endpoints";

const request = axios.create({
  baseURL: endpoints.baseURL
});

export default request;
