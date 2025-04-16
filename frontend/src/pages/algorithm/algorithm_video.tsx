export function AlgorithmVideo() {

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
                    Решения задач на LeetCode
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    <a href="https://www.youtube.com/@GlebMikhaylov"
                       className="text-lg font-bold hover:text-blue-300 transition-colors">Глеб Михайлов</a> это
                    аналитик и дата саент-специалист, работал в Альфе, Сбере, Ростелекоме. C 2019 работает наставником в
                    Яндекс.Практикуме, ведет вебинары по анализу данных и data science.
                </p>
                <iframe className="mx-auto" width="560" height="315"
                        src="https://www.youtube.com/embed/Pp84Sv041xA?si=FJCURMgmg4dc_dom"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>
            </div>

            {/* Описание и сам сайт со ссылкой */}
            <div className="max-w-6xl mx-auto">
                {/* Заголовок для блока */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold text-center">
                    Разбор основных проблем LeetCode
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    <a href="https://www.youtube.com/@stoneycodes"
                       className="text-lg font-bold hover:text-blue-300 transition-colors">stoney codes</a> данные
                    ютубер разбирает основные проблемы которые встреться вам на LeetCode по структурам данных а также у
                    него есть куча
                    другого обучающего материала на его patreon.
                </p>
                <iframe className="mx-auto" width="560" height="315"
                        src="https://www.youtube.com/embed/lvO88XxNAzs?si=Ho6lkIvr0Xb-ufm0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>
            </div>

            {/* Описание и сам сайт со ссылкой */}
            <div className="max-w-6xl mx-auto">
                {/* Заголовок для блока */}
                <h2 className="text-lg text-gray-300 mb-6 font-bold text-center">
                    freeCodeCamp
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Сайт <a href="https://www.freecodecamp.org/"
                            className="text-lg font-bold hover:text-blue-300 transition-colors">freeCodeCamp</a> это
                    некоммерческая образовательная платформа, предназначенная для обучения программированию с нуля. Она
                    предлагает бесплатные курсы, интерактивные задания и проекты, которые помогут новичкам освоить
                    навыки веб-разработки и других направлений в IT.
                </p>
                <iframe className={"mx-auto"} width="560" height="315"
                        src="https://www.youtube.com/embed/T0u5nwSA0w0?si=1FFTymmzriSGdt-8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                {/* Разделитель */}
                <hr className="border-t border-gray-300 my-4"/>

                {/* Кнопка перехода на предыдущую страницу */}
                <div className="flex justify-between p-4 pt-15">
                    <a
                        href="/algorithm"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Назад
                    </a>
                </div>
            </div>
        </div>
    )
}