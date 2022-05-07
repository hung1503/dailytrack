import axios from "axios";
const baseUrl = "http://localhost:5000/api/activities";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((response) => response.data);
};

const createDate = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const creatActivity = (id, newObject) => {
  const response = axios.post(`${baseUrl}/${id}/routine`, newObject);
  return response.then((response) => response.data);
};

const addingParentTime = (id, newObject) => {
  const response = axios.put(`${baseUrl}/${id}/parentTime`, newObject);
  return response.then((response) => response.data);
};

const update = (id, newObject) => {
  const response = axios.put(`${baseUrl}/${id}`, newObject);
  return response.then((response) => response.data);
};

const removeDate = (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = axios.delete(`${baseUrl}/${id}`, config);
  return response.then((response) => response.data);
};

const removeRoutine = (id, object) => {
  const config = {
    headers: { Authorization: token },
  };
  return axios.delete(`${baseUrl}/${id}/routine`, object, config);
};

export default {
  getAll,
  createDate,
  creatActivity,
  addingParentTime,
  update,
  setToken,
  removeDate,
  removeRoutine,
};
