import { Transition } from '@headlessui/react';
import ImgPointer from '../../assets/pointer.svg';
import { TRPC } from "../../lib/trcp-create.tsx";

const scrollToSection = () => {
    const section = document.getElementById('next-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export function Main() {
    const { data, error, isLoading, isFetching, isError } = TRPC.getMainCards.useQuery();

    if (isError) {
        return <span className="text-red-500">{error.message}</span>;
    }
    if (isLoading || isFetching) {
        return <span className="text-blue-500">Loading...</span>;
    }

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="relative min-h-screen overflow-hidden">
                <img
                    src="mainBackGround.jpg"
                    alt="Background"
                    className="w-full h-full object-cover absolute inset-0 opacity-50"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <h1 className="text-6xl font-bold mb-6">Learn to Code</h1>
                    </Transition>
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <h3 className="text-2xl mb-6">
                            You will find many useful resources here,
                            <br />including articles, lessons, code examples, and practical assignments.
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
                            Not Sure Where To Begin?
                        </a>
                    </Transition>
                </div>
                <button
                    onClick={scrollToSection}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none"
                >
                    <img src={ImgPointer} alt="pointer" className="animate-bounce h-20 w-20" />
                </button>
            </div>

            {/* Cards Section */}
            <div
                id="next-section"
                className="min-h-screen py-12 px-6 bg-gray-800 flex flex-wrap justify-center items-start gap-8"
            >
                <div className="w-full text-center">
                    <h2 className="text-4xl font-bold text-white mb-12">Sections available for study</h2>
                </div>
                {data.mainCards.map((card, index) => (
                    <Transition
                        key={index}
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                            <div className="rounded-lg shadow-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors w-full max-w-xs transform hover:scale-105">
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                    <p className="text-gray-300 my-4">
                                        {card.text}
                                    </p>
                                    <a
                                        href={card.href}
                                        className="inline-block px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold"
                                    >
                                        {card.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Transition>
                ))}
            </div>
        </div>
    );
}