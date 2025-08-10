import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/rickAndMorty';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useState, useMemo } from 'react';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';


type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  image: string;
};

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}


export default function Home() {
  const search = useSearch({ strict: false });
  const initialPage = parseInt(search.page || '1');
  const [page, setPage] = useState(initialPage);

  const navigate = useNavigate();

const { data, isLoading, refetch } = useQuery<CharacterResponse>({
  queryKey: ['characters', page],
  queryFn: () => fetchCharacters(page),
  placeholderData: (previousData) => previousData,
});

  const columns = useMemo<ColumnDef<Character>[]>(
    () => [
      {
        header: 'Image',
        accessorFn: row => row.image,
        cell: info => (
          <img src={info.getValue() as string} alt="avatar" width={40} />
        ),
      },
   {
  header: 'Name',
  accessorKey: 'name',
  cell: info => {
    const name = info.getValue();
    return typeof name === 'string' ? (
      <a href={`/character/${info.row.original.id}`}>{name}</a>
    ) : null;
  },
},
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Species',
        accessorKey: 'species',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Origin',
        accessorFn: row => row.origin.name,
      },
    ],
    []
  );

  const table = useReactTable({
    data: data?.results ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate({ to: '/', search: { page: String(newPage) } });
  };

  return (
    <div>
      <button onClick={() => refetch()}>🔁 Refresh</button>

      {isLoading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <table border={1} cellPadding={5} cellSpacing={0}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {data && (
  <div style={{ marginTop: '1rem' }}>
    <button disabled={!data.info.prev} onClick={() => handlePageChange(page - 1)}>
      Previous
    </button>
    <span style={{ margin: '0 10px' }}>Page {page}</span>
    <button disabled={!data.info.next} onClick={() => handlePageChange(page + 1)}>
      Next
    </button>
  </div>
)}
        </>
      )}
    </div>
  );
}
