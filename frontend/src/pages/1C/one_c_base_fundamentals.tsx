export function OneCBaseFundamentals() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-center mb-8">
                1C Учебник для разработчика
            </h1>
            <div className="max-w-4xl mx-auto">
                {/* Заголовок ссылок */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold">
                    Книги которые помогут в начале пути
                </h2>
                <ul className="space-y-4">
                    <li>
                        <p>
                            Радченко М.Г., Хрусталева Е.Ю. - 1С Предприятие 8.3 Практическое пособие разработчика.
                            Примеры и типовые приемы
                        </p>
                    </li>
                    <li>
                        <p>
                            Профессиональная разработка в системе 1С в двух томах
                        </p>
                    </li>
                    <li>
                        <p>
                            Радченко М.Г. 1С Предприятие 8.3 Практическое пособие разработчика
                        </p>
                    </li>
                </ul>


                <div className="flex justify-between p-4">
                    {/* Кнопка перехода на предыдущую страницу */}
                    <a
                        href="/1C-Base"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Назад
                    </a>
                    {/* Кнопка перехода на следующую страницу */}
                    <a
                        href="/OneCBaseFundamentals"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold"
                    >
                        Продолжить
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}