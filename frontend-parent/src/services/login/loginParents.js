import axios from "axios";
const baseUrl = "http://localhost:5000/api/login/parent";

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
