export function OneCBase() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-center mb-8">
                1C Обучение основ
            </h1>

            {/* Основной контент */}
            <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-300 mb-6">
                    Я собрал курсы по 1С-программированию. Они подойдут для тех,
                    кто хочет стать узконаправленным специалистом на внутреннем рынке.
                </p>

                {/* Список ссылок */}
                <ul className="space-y-4">
                    <li>
                        <a
                            href="https://курсы-по-1с.рф/free/"
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://курсы-по-1с.рф/free/
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://uc1.1c.ru/courses/besplatno/"
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://uc1.1c.ru/courses/besplatno/
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}