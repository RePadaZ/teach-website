import {Transition} from '@headlessui/react';
import ImgPointer from '../../assets/pointer.svg';
import {Cards} from "../../components/cards/cards.tsx";
import {mainCards} from "../../components/data-components/data_components.tsx";

const scrollToSection = () => {
    const section = document.getElementById('next-section');
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
};

export function Main() {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="relative min-h-screen overflow-hidden">
                <img
                    src={"mainBackGround.jpg"}
                    alt="Background"
                    className="w-full h-full object-cover absolute inset-0 opacity-50"
                />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <h1 className="text-6xl font-bold mb-6">Изучайте программирование</h1>
                    </Transition>
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <h3 className="text-2xl mb-6">
                            Вы найдете здесь много полезных ресурсов,
                            <br/>включая статьи, уроки, примеры кода и практические задания.
                        </h3>
                    </Transition>
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000 delay-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <a
                            href="/to-start"
                            className="text-lg font-bold hover:text-blue-300 transition-colors"
                        >
                            Не уверены, с чего начать?
                        </a>
                    </Transition>
                </div>
                <button
                    onClick={scrollToSection}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none"
                >
                    <img src={ImgPointer} alt="pointer" className="animate-bounce h-20 w-20"/>
                </button>
            </div>

            {/* Cards Section */}
            <div
                id="next-section"
                className="min-h-screen py-12 px-6 bg-gray-800 flex flex-wrap justify-center items-start gap-8"
            >
                <div className="w-full text-center">
                    <h2 className="text-4xl font-bold text-white mb-12">Разделы, доступные для обучения</h2>
                </div>
                {mainCards.map((card, index) => (
                    <Cards key={card.id} index={index} title={card.title} text={card.text} href={card.href}
                           button={card.button}/>
                ))}
            </div>
        </div>
    );
}