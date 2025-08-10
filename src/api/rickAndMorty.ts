import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchCharacters = async (page: number) => {
  const response = await api.get(`/character?page=${page}`);
  return response.data;
};

export const fetchCharacterById = async (id: string) => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};
