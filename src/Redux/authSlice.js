import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resetUser, setUser } from "./userSlice";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/auth`;

export const authApi = createApi({
  reducerPath: "authApi",
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
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),

    signin: builder.mutation({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ["auth"],
    }),

    currentUser: builder.query({
      query: () => ({
        url: "/current",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(resetUser());
      },
      invalidatesTags: ["auth"],
    }),

    updateUser: builder.mutation({
      query: ({ _id, body }) => ({
        url: `/user/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["auth", "user"],
    }),

    deleteUser: builder.mutation({
      query: (_id) => ({
        url: `/user/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["auth", "user"],
    }),

    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = authApi;
