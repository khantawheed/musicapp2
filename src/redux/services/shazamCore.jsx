import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com/',
            prepareHeaders : (headers)=>{
                headers.set('X-RapidAPI-Key','fadec46ea2mshf454764893d3cd2p10cac8jsn92b70a459aaa')
            },
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({query:()=>'/charts/track'}),
        }),
  });

  export const{
    useGetTopChartsQuery,
  }= shazamCoreApi;