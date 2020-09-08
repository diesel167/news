import axios from "axios";
//get Geo data for user
export default axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/current",
  responseType: "json"
});