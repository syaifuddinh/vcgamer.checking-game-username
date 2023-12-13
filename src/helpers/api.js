import Axios from "axios";

const Api = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export default Api;