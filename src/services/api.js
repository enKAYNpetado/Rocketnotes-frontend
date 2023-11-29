import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-z1q8.onrender.com"
})

api.get("/users/:id")