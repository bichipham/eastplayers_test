import { fetchAPI } from "@/service/apiService";

export const getListContact = async () => {
  const data = await fetchAPI({ url: '/contacts', payload: {method: 'GET'} });
  return data?.data;
};
