import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/parcels`;

export const parcelsApi = createApi({
  reducerPath: "parcelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["parcels"],
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["parcels"],
    }),

    getParcelById: builder.query({
      query: (id) => ({ url: `/${id}` }),
      providesTags: ["parcels"],
    }),

    searchParcels: builder.query({
      query: (searchParams) => ({ url: `?${searchParams.toString()}` }),
      providesTags: ["parcels"],
    }),

    deleteParcel: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: "DELETE" }),
      invalidatesTags: ["parcels"],
    }),

    updateParcel: builder.mutation({
      query: ({ _id, body }) => ({ url: `/${_id}`, method: "PATCH", body }),
      invalidatesTags: ["parcels"],
    }),

    updateDriver: builder.mutation({
      query: ({ _id, body }) => ({
        url: `/update/driver/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["parcels"],
    }),

    updatePayment: builder.mutation({
      query: ({ _id, body }) => ({
        url: `/update/payment/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["parcels"],
    }),

    updateTracking: builder.mutation({
      query: ({ _id, body }) => ({
        url: `/update/tracking/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["parcels"],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetParcelByIdQuery,
  useSearchParcelsQuery,
  useDeleteParcelMutation,
  useUpdateParcelMutation,
  useUpdateDriverMutation,
  useUpdatePaymentMutation,
  useUpdateTrackingMutation,
} = parcelsApi;
