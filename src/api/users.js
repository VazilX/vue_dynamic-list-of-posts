import { client } from "./httpClient";

export const getUsers = () => {
  return client.get('/users');
};

export const getUser = (id) => {
  return client.get(`/users/${id}`);
};

export const getUserByEmail = (email) => {
  return client.get(`/users?email=${email}`);
};