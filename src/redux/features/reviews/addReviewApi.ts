import { baseApi } from "../../api/baseApi";

const addReviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (updateData) => ({
        url: `/${updateData.id}`,
        method: "PATCH",
        body: {
          ...updateData.product,
          reviews: [...updateData.product.reviews, updateData.review],
        },
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});
export const { useAddReviewMutation } = addReviewApi;
