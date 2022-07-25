import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const warehouseApi = createApi({
  reducerPath: "warehouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER,
    mode: "no-cors",
  }),
  endpoints: (build) => ({
    createWarehouse: build.mutation({
      query: (data) => ({
        url: "warehouse",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const { useCreateWarehouseMutation } = warehouseApi;
