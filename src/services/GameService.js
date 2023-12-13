import Api from "@/helpers/Api";

const Get = async ({ keyword }) => {
	const url = "game";
	const params = { keyword };
	const { data } = await Api.get(url, { params });
	
	return data;	
}

export default { Get }