import { baseApi } from "../../api/baseApi";

const getAllProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});
export const { useAllProductsQuery } = getAllProductsApi;
