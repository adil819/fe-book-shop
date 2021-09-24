import axios from "axios";

export default axios.create({
    // baseUrl: "http://localhost:8080/",
    headers: {
        "content-type": "application/json"
    }
})