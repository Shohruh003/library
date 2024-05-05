import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appSlice = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
        headers: {
          Key: "{key}",
          Sign: "{sign}",
        },
      }),
    }),
    updateBook: builder.mutation({
      query: (book) => ({
        url: `/books/${book.id}`,
        method: "PATCH",
        body: book,
        headers: {
          Key: "{key}",
          Sign: "{sign}",
        },
      }),
    }),
    deleteBook: builder.mutation({
      query: (book) => ({
        url: `/books/${book.id}`,
        method: "DELETE",
        body: book,
        headers: {
          Key: "{key}",
          Sign: "{sign}",
        },
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = appSlice;
