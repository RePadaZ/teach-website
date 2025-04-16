import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {header} from "../data-components/data_components.tsx";
import {TRPC} from "../../lib/trcp_create.tsx";

export function Header() {
    const {data} = TRPC.GetMe.useQuery()


    return (
        <header className="bg-gray-900 text-white w-full px-6 py-4 shadow-lg z-50 relative">
            <div className="container mx-auto flex items-center justify-between relative">
                {/* Логотип */}
                <a href="/" className="text-3xl font-bold tracking-wide text-white hover:text-gray-300 transition">
                    Logo
                </a>
                {/* Навигация */}
                <nav className="flex-1 flex justify-center">
                    <div className="flex space-x-6 bg-gray-800 bg-opacity-80 px-6 py-3 rounded-full shadow-md">
                        {header.map((category) => (
                            <Menu as="div" className="relative inline-block text-left" key={category.id}>
                                <Menu.Button
                                    className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 transition">
                                    {category.name}
                                    <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-400"/>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute left-0 mt-3 w-56 bg-white bg-opacity-90 backdrop-blur-lg divide-y divide-gray-200 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-50">
                                        {category.items.map((item, index) => (
                                            <Menu.Item key={index}>
                                                {({active}) => (
                                                    <a
                                                        href={item.href}
                                                        className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-6 py-3 text-sm font-medium transition rounded-lg`}
                                                    >
                                                        {item.label}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        ))}
                    </div>
                </nav>
                {/* Кнопки пользователя */}
                <div className="absolute right-6">
                    {data?.me ? (
                        <div
                            className="flex items-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-full py-3 px-6 shadow-2xl backdrop-blur-lg">
                            <a href="/#"
                               className="text-white text-sm font-medium"
                            >
                                {data.me.login}
                            </a>
                            <a
                                href="/LogOut"
                                className="ml-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition shadow-lg rounded-full"
                            >
                                Выйти
                            </a>
                        </div>
                    ) : (
                        <a
                            href="/login"
                            className="px-5 py-3 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition shadow-lg"
                        >
                            Вход / Регистрация
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}