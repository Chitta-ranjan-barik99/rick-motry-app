import axios from 'axios';
import type { Character, CharactersResponse } from '../types/character';
// import { CharactersResponse, Character } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1): Promise<CharactersResponse> => {
  const { data } = await axios.get(`${BASE_URL}/character?page=${page}`);
  return data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const { data } = await axios.get(`${BASE_URL}/character/${id}`);
  return data;
};
