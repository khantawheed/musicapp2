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
            getSongDetails: builder.query({ query: ({ songid }) => `shazam-songs/get-details?id=${songid}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `shazam-songs/list-similarities?id=${songid}` }),
            getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
            getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?artist_id=${artistId}` }),
        }),
  });

  export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
  }= shazamCoreApi;