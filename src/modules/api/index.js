import endpoints from "./endpoints";
import request from "./request";

class APIClient {
  constructor() {
    this.endpoints = endpoints;
    this.request = request;
  }

  async getUsers() {
    const params = {};


    const { data } = await this.request({
      method: "get",
      url: this.endpoints.users()
    });
    return data.data;
  }

  async getUser(id) {
    const { data } = await this.request({
      method: "get",
      url: this.endpoints.user(id)
    });
    return data;
  }
}

export default new APIClient();
