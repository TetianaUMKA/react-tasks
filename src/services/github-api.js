import axios from "axios";

export const fetchUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users1/${username}`);
  return response.data;
};
