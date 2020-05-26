const endpoints = {
  baseURL: process.env.API_URL || "https://reqres.in/api/",

  users() {

    return `users/`;
  },

  user(iserId) {
    const pathParams = iserId ? `/${iserId}` : "";
    return `users${pathParams}/`;
  }
};

export default endpoints;
