import endpoints from "./endpoints";
import request from "./request";

class APIClient {
  constructor() {
    this.endpoints = endpoints;
    this.request = request;
  }

  async getUsers({ limit = 2, page = 1, total_pages } = {}) {
    const params = {
      page: page,
      per_page: limit,
      total_pages: total_pages
    };


    const { data } = await this.request({
      method: "get",
      url: this.endpoints.users(),
      params
    });
    return data;
  }

  async getUser(id) {
    const { data } = await this.request({
      method: "get",
      url: this.endpoints.user(id)
    });
    return data.data;
  }
}

export default new APIClient();
