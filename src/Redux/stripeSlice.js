import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/stripe`;

export const stripeApi = createApi({
  reducerPath: "stripeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["stripe"],
  endpoints: (builder) => ({
    createCheckout: builder.mutation({
      query: (body) => ({
        url: "/create-checkout-session",
        method: "POST",
        body,
      }),
      invalidatesTags: ["stripe"],
    }),
    getSession: builder.query({
      query: (id) => ({
        url: `/get-session/${id}`,
      }),
    }),
  }),
});

export const { useCreateCheckoutMutation, useGetSessionQuery } = stripeApi;
