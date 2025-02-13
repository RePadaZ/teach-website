import { TRPC } from "../../lib/trcp-create.tsx";
import {ImageCards} from "../../components/image-cards/imageCards.tsx";

export function TechExamples() {
    const { data, error, isLoading, isFetching, isError } = TRPC.getCards.useQuery();

    if (isError) {
        return <span className="text-red-500">{error.message}</span>;
    }
    if (isLoading || isFetching) {
        return <span className="text-blue-500">Loading...</span>;
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.cards.map((card) => (
                       <ImageCards index={card.id} image={card.image} title={card.title} href={card.href} text={card.text}  />
                    ))}
                </div>
            </div>
        </div>
    );
}