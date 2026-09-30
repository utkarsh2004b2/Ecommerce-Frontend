import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-8b01.up.railway.app/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
