import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPokemonAbility } from '../models/Core';
import { TagService } from '@Constants/Core';

const { VITE_POKEMON_BASE_URL, VITE_POKEMON_ABILITY } = import.meta.env;

export const pokemonApi = createApi({
  reducerPath: TagService.PokemonAPI,
  baseQuery: fetchBaseQuery({ baseUrl: VITE_POKEMON_BASE_URL }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<IPokemonAbility, number>({
      query: () => VITE_POKEMON_ABILITY,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllPokemonsQuery } = pokemonApi;
