export function Algorithm() {

    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-center mb-8">
                Алгоритмы
            </h1>

            {/* Описание и сам сайт со ссылкой */}
            <div className="max-w-6xl mx-auto">
                {/* Заголовок для блока */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold text-center">
                    LeetCode
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    <a href={"https://leetcode.com/"}
                       className="text-lg font-bold hover:text-blue-300 transition-colors">LeetCode</a> это ведущая
                    онлайн-платформа для изучения алгоритмов
                    и подготовки к
                    техническим
                    собеседованиям,
                    особенно полезная для начинающих программистов
                    <br/>
                    У вас наверняка возник вопрос "Почему LeetCode полезен для новичков?"
                    <br/>
                    <ul className="text-lg text-gray-300 mb-6 list-decimal pl-8">
                        <li>
                            Понимание алгоритмов: LeetCode помогает новичкам разобраться в основах алгоритмов и
                            научиться применять их на практике.
                        </li>
                        <li>
                            Развитие логического мышления: Решение задач способствует развитию аналитических
                            способностей и умения находить оптимальные решения.
                        </li>
                        <li>
                            Повышение уверенности: Постепенное усложнение задач позволяет новичкам чувствовать прогресс
                            и повышать уверенность в своих силах.
                        </li>
                        <li>
                            Гибкость обучения: Платформа доступна онлайн и поддерживает различные языки
                            программирования, что делает обучение удобным и адаптированным под индивидуальные
                        </li>
                    </ul>
                </p>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>
            </div>

            {/* Описание и сам сайт со ссылкой */}
            <div className="max-w-6xl mx-auto">
                {/* Заголовок для блока */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold text-center">
                    Сodewars
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    <a href={"https://www.codewars.com"}
                       className="text-lg font-bold hover:text-blue-300 transition-colors">Сodewars</a> это
                    онлайн-платформа для практики программирования, которая помогает разработчикам улучшать навыки через
                    решение задач различной сложности. Особенно полезен этот ресурс для изучения алгоритмов и структур
                    данных. Ниже мы рассмотрим преимущества Codewars и возможности, которые он
                    предоставляет
                    <br/>
                    <ul className="text-lg text-gray-300 mb-6 list-decimal pl-8">
                        <li>
                            Геймификация процесса обучения:
                            Codewars использует систему рангов и очков чести (honor), что делает процесс обучения более
                            увлекательным и мотивирующим. Задачи называются "ката" и имеют уровни сложности от 8 kyu
                            (новичок) до 1 kyu (эксперт), что позволяет пользователям постепенно повышать свой уровень.
                        </li>
                        <li>
                            Поддержка множества языков программирования:
                            Платформа поддерживает более 55 языков программирования, включая Python, JavaScript, Java,
                            C++, Ruby и другие. Это позволяет пользователям практиковаться в различных языках и
                            расширять свои знания.
                        </li>
                        <li>
                            Обратная связь и обучение на примерах:
                            После решения задачи пользователи могут просматривать решения других участников, что
                            способствует обучению новым техникам и подходам. Это позволяет сравнивать различные методы
                            решения одной и той же задачи.
                        </li>
                        <li>
                            Активное сообщество:
                            Codewars имеет активное сообщество разработчиков, которые создают новые задачи, обсуждают
                            решения и помогают друг другу в обучении. Это создает благоприятную среду для роста и обмена
                            знаниями.
                        </li>
                    </ul>
                </p>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>
            </div>

            {/* Описание и сам сайт со ссылкой */}
            <div className="max-w-6xl mx-auto">
                {/* Заголовок для блока */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold text-center">
                    Визуализатор алгоритмов
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Сайт <a href={"https://algorithm-visualizer.org/"}
                            className="text-lg font-bold hover:text-blue-300 transition-colors">Algorithm Visualizer</a>
                    — это
                    интерактивная онлайн-платформа, предназначенная для
                    визуализации работы алгоритмов.
                    <br/>
                    Он позволяет наблюдать, как различные алгоритмы выполняются шаг за шагом, что делает процесс
                    обучения более наглядным и понятным.
                    <br/>
                    Также у данного сайта есть свой плюс.
                    Вы можете писать собственный код и сразу видеть, как он
                    выполняется, что способствует более глубокому пониманию алгоритмов.
                </p>
                {/* Вставка самого сайта */}
                <iframe src="https://algorithm-visualizer.org/"
                        title={"AlgoVisual"} name={"AlgorithmVisual"} className="w-290 h-200 mx-auto"/>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>

                {/* Кнопка перехода на следующую страницу */}
                <div className="flex justify-end p-4 pt-15">
                    <a
                        href="/algorithm/video"
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
    )
}