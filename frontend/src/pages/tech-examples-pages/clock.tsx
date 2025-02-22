import {useEffect, useState} from "react";
import {Transition} from "@headlessui/react";

export function Clock() {
    // Состояние для времени
    const [time, setTime] = useState(new Date());

    // Настройка интервала
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-6">
            {/* Заголовок и описание */}
            <div className="text-center text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Часы на JavaScript</h2>
                <p className="text-lg text-gray-300">
                    Узнайте, как создать часы на чистом JavaScript и с использованием React.
                </p>
            </div>

            {/* Карточка с часами */}
            <Transition
                key={time.toLocaleTimeString()} // Анимация при изменении времени
                appear={true}
                show={true}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
    <span className="text-6xl font-bold text-white">
        {time.toLocaleTimeString()}
    </span>
            </Transition>
        </div>
    );
}