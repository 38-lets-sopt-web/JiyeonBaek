import axios, { type AxiosInstance } from "axios";

let client: AxiosInstance | null = null;

export const getApiClient = () => {
  const baseURL = process.env.VITE_API_BASE_URL;
  const apiKey = process.env.VITE_API_KEY;

  if (!baseURL) {
    throw new Error("VITE_API_BASE_URL is not defined.");
  }

  if (!apiKey) {
    throw new Error("VITE_API_KEY is not defined.");
  }

  client ??= axios.create({
    baseURL,
    headers: {
      accept: "application/json",
    },
    params: {
      api_key: apiKey,
    },
  });

  return client;
};
