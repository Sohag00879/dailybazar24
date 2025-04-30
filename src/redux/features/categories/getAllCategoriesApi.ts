import { baseApi } from "../../api/baseApi";

const getAllCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});
export const { useAllCategoriesQuery } = getAllCategoriesApi;
