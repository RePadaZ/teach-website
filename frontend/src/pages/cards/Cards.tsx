import { TRPC } from "../../lib/trcp-create.tsx";

export function Cards() {
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
                        <div
                            key={card.id}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={card.image}
                                alt="Card Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                                <a
                                    href={card.href}
                                    className="text-blue-400 hover:text-blue-300 transition-colors block text-sm font-medium"
                                >
                                    {card.text}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}