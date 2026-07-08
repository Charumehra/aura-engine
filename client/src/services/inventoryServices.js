import api from "../api/axios";

export const getInventory = async (params = {}) => {
  const { data } = await api.get("/inventory", {
    params,
  });

  return data;
};

export const getAnalytics = async () => {
  const { data } = await api.get("/analytics");

  return data;
};