import { baseApi } from "../../api/baseApi";

const addReviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (updateData) => ({
        url: `/${updateData.id}`,
        method: "PATCH",
        body: {
          ...product,
          reviews: [...reviews, newReview],
        },
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});
export const { useAddReviewMutation } = addReviewApi;
