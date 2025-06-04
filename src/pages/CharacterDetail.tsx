import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { fetchCharacterById } from '../api/characters';
import type { Character } from '../types/character';
// import { Character } from '../types/character';

export const CharacterDetail = () => {
  const { characterId } = useParams({ from: '/character/$characterId' });

  const { data, isLoading } = useQuery<Character>({
    queryKey: ['character', characterId],
    queryFn: () => fetchCharacterById(characterId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Character not found</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};
