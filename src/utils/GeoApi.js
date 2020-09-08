import axios from "axios";
//get Geo data for user
export default axios.create({
  baseURL: "https://api.sypexgeo.net/",
  responseType: "json"
});