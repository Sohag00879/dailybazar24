import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://dummyjson.com/products",
  }),
  tagTypes: ["products", "reviews"],
  endpoints: () => ({}),
});
