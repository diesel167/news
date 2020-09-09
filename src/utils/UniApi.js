import axios from "axios";
//get Geo data for user

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://img.tyt.by/",
  responseType: "xml"
});