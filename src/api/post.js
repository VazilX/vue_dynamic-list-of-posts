import { client } from "./httpClient";

export const getUserPosts = (userId) => {
  return client.get(`/posts?userId=${userId}`);
};

export const getPosts = () => {
  return client.get("/posts");
};

export const createPosts = ({ body, title, userId }) => {
  return client.post("/posts", { body, title, userId });
};

export const updatePost = ({ body, title, postId }) => {
  return client.patch(`/posts/${postId}`, { body, title });
};

export const deletePost = (postId) => {
  return client.delete(`https://mate.academy/students-api/posts/${postId}`);
};
