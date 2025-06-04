import React from "react";
import { fetchCharacters } from "../api/characters";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [page, setPage] = React.useState(1);

  const { data, isPending, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    placeholderData: (prev) => prev,
  });

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>

      {/* Render your character list */}
      {data?.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}

      {/* Pagination controls */}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <button
        disabled={page === data?.info.pages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
