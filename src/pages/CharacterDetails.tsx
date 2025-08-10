import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api/rickAndMorty';
import { useParams } from '@tanstack/react-router';

export default function CharacterDetails() {
    const { id } = useParams({ strict: false }) as { id: string };

    const { data, isLoading } = useQuery({
        queryKey: ['character', id],
        queryFn: () => fetchCharacterById(id),
    });

    if (isLoading) return <p>Loading character details...</p>;

    return (
        <div>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} />
            <p>Status: {data.status}</p>
            <p>Species: {data.species}</p>
            <p>Origin: {data.origin.name}</p>
            <p>Location: {data.location.name}</p>
        </div>
    );
}
