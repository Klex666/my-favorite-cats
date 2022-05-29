import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICats } from './catsApiTypes';

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    // prepareHeaders: (headers) => {
    //   headers.set('x-api-key', '1ef13cd3-49c5-4399-bd30-7536127f08d3');
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getAllCats: builder.query<ICats[], number>({
      query: (limit: number) => `/images/search?limit=${limit}`,
    }),
  }),
});

export const { useGetAllCatsQuery } = catsApi;
