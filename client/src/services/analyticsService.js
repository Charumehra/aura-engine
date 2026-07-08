import api from "../api/axios";

export const getAnalytics = async () => {
  const { data } = await api.get("/analytics");
  return data.data;
};