export const ImageCards = ({
                               index,
                               image,
                               title,
                               href,
                               text,
                           }: {
    index: number;
    image: string;
    title: string;
    href: string;
    text: string;
}) => {
    return (
        <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <img
                src={image}
                alt="Card Image"
                className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <a
                    href={href}
                    className="text-blue-400 hover:text-blue-300 transition-colors block text-sm font-medium"
                >
                    {text}
                </a>
            </div>
        </div>
    )
}