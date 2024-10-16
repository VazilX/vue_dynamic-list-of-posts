import { client } from "./httpClient";

export const getUsers = () => {
  return client.get('/users');
};

export const getUserByEmail = (email) => {
  return client.get(`/users?email=${email}`);
};