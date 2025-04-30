import { baseApi } from "../../api/baseApi";

const editProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useEditProductMutation } = editProductApi;
