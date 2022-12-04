import axios from "axios";

export const Connection = axios.create({
    baseURL: "http://localhost:8080/v1/barber-pass",
});
