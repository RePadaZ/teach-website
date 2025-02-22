import {Transition} from '@headlessui/react';

export const Cards = ({
                          index,
                          title,
                          text,
                          href,
                          button,
                      }: {
    index: number;
    title: string;
    text: string;
    href: string;
    button: React.ReactNode;
}) => {
    return (
        <Transition
            key={index}
            appear={true}
            show={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
        >
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                <div
                    className="rounded-lg shadow-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors w-full max-w-xs transform hover:scale-105">
                    <div className="p-6 text-center">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-gray-300 my-4">
                            {text}
                        </p>
                        <a
                            href={href}
                            className="inline-block px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
    )
}