import axios from "axios";
const baseUrl = "http://localhost:5000/api/students";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const response = axios.put(`${baseUrl}/${id}`, newObject);
  return response.then((response) => response.data);
};

const remove = (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = axios.delete(`${baseUrl}/${id}`, config);
  return response.then((response) => response.data);
};

export default { getAll, create, update, setToken, remove };
