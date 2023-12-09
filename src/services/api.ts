import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://api-petcuidado.onrender.com",
  timeout: 5000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = process.env.TOKEN
    // const token = await AsyncStorage.getItem('userToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
