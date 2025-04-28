import { baseApi } from "../../api/baseApi";

const getSingleProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        singleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET',
            })
        })
    }),
})
export const { useSingleProductQuery } = getSingleProductApi;