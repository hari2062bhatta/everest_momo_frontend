import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

Api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.data?.code === "ACCESS_TOKEN_EXPIRED" &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/api/user/refreshtoken")
    ) {
      originalRequest._retry = true;

      try {
        await Api.post("/api/user/refreshtoken");

        return Api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default Api;