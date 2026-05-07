import axios from "axios";

const Axiosapi= axios.create({
    baseURL: "https://manabazar_be_dev.machint.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default Axiosapi;