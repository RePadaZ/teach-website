export function OneCBaseMain() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-center mb-8">
                1C Учебник для разработчика
            </h1>

            {/* Основной контент */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-lg text-gray-300 mb-6 font-bold">
                    Основные приимущества 1С
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    1С — это популярная система для автоматизации бизнеса, которая имеет множество преимуществ. Вот
                    основные из них:
                </p>
                <ol className="text-lg text-gray-300 mb-6 list-decimal pl-8">
                    <li>
                        Широкие возможности для автоматизации различных бизнес-процессов (бухгалтерия, склад,
                        торговля, производство).
                    </li>
                    <li>
                        Гибкость и адаптивность — настройка под различные отрасли и компании.
                    </li>
                    <li>
                        Интуитивно понятный интерфейс, доступный для пользователей с разным уровнем подготовки.
                    </li>
                    <li>
                        Широкая поддержка: большое сообщество, обучение, обновления и база знаний.
                    </li>
                    <li>
                        Интеграция с другими системами (например, банки, ERP, CRM).
                    </li>
                    <li>
                        Высокий уровень безопасности и контроля доступа.
                    </li>
                    <li>
                        Масштабируемость для компаний любого размера.
                    </li>
                    <li>
                        Отчётность и аналитика для принятия управленческих решений.
                    </li>
                    <li>
                        Легкость обучения и постоянная поддержка.
                    </li>
                </ol>
                <p className="text-lg text-gray-300">
                    Эти преимущества делают 1С отличным выбором для автоматизации бизнеса.
                </p>

                {/* Разрыв */}
                <hr className="my-4 border-gray-300"/>

                {/* Заголовок ссылок */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold">
                    Ссылки которые могут вам помочь с обучением
                </h2>
                {/* Список ссылок */}
                <ul className="space-y-4">
                    <li>
                        <a
                            href="https://курсы-по-1с.рф/free/"
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Официальный сайт с дополнительными материалами и курсами
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://uc1.1c.ru/courses/besplatno/"
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ссылка на учебным центр с курсами по 1С
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/playlist?list=PLnhTnXRFDQ7en_MVaepKmkL2g23zOXQMx"
                            className="text-blue-400 hover:text-blue-300 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ютуб канал IronSkill
                        </a>
                    </li>
                </ul>
                {/* Кнопка перехода на следующую страницу */}
                <div className="flex justify-end p-4">
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