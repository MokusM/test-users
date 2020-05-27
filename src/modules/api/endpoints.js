const endpoints = {
  baseURL: process.env.API_URL || "https://reqres.in/api/",

  users() {
    return `users/`;
  },

  user(userId) {
    const pathParams = userId ? `/${userId}` : "";
    return `users${pathParams}`;
  }
};

export default endpoints;
