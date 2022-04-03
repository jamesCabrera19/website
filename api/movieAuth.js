import axios from "axios";

export default axios.create({
    baseURL: "https://movie-auth-service.herokuapp.com",
});
