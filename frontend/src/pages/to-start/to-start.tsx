export function ToStart() {
    const cards = [
        {
            title: "Первая веб-страница",
            text: "На этом уроке мы создадим вашу первую веб-страницу и рассмотрим основы.",
            button: "Начни изучать HTML",
            href: "/html",
        },
        {
            title: "Основы стиля",
            text: "На этом уроке мы познакомимся со стилями и добавим их на нашу страницу.",
            button: "Начни изучать CSS",
            href: "/css",
        },
        {
            title: "Динамическая страница JS",
            text: "В этом уроке мы узнаем, как использовать JavaScript для добавления динамики на нашу веб-страницу.",
            button: "Начни изучать JS",
            href: "/javascript",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-6">
            <div className="container mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex justify-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
                        style={{marginTop: `${index * 40}px`}}
                    >
                        <div
                            className="w-full lg:w-1/2 bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white">
                                    {index + 1}. {card.title}
                                </h3>
                                <p className="text-gray-400 mt-3">{card.text}</p>
                                <div className="mt-6">
                                    <a
                                        href={card.href}
                                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        {card.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}