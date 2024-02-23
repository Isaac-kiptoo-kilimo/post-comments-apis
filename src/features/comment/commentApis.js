import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Move baseUrl here
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => `posts/1/comments`, // Use postId as a parameter
      providesTags: (result, error, postId) => [{ type: 'Comments', postId }],
    }),
  }),
});

export const { useGetCommentsQuery } = commentApi;
