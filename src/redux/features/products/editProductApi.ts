import { baseApi } from "../../api/baseApi";

const editProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProduct: builder.mutation({
      query: (editInfo) => ({
        url: `/edit-donation/${editInfo.id}`,
        method: "PATCH",
        body: editInfo.donationData,
      }),
      invalidatesTags: ["donations"],
    }),
  }),
});
export const { useEditProductMutation } = editProductApi;
