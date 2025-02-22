import {ImageCards} from "../../components/image-cards/image_cards.tsx";
import {cards} from "../../components/data-components/data_components.tsx";

export function TechExamples() {

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {cards.map((card) => (
                       <ImageCards index={card.id} image={card.image} title={card.title} href={card.href} text={card.text}  />
                    ))}
                </div>
            </div>
        </div>
    );
}