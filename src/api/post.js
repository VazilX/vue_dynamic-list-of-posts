import { client } from "./httpClient";

export const getUserPosts = (userId) => {
  return client.get(`/posts?userId=${userId}`);
};

export const getPosts = () => {
  return client.get('/posts');
};