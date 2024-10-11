import { client } from "./httpClient";

export const getUsers = () => {
  return client.get('/users');
};

export const getUser = (id) => {
  return client.get(`/users/${id}`);
};