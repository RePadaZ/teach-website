import { useState } from "react";
import { Transition } from "@headlessui/react";

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000); // Скрыть сообщение через 3 секунды
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                {/* Заголовок формы */}
                <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                    Send us a Message
                </h2>

                {/* Форма */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Поле для имени */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            First name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Поле для email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Your email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Поле для телефона */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Your phone:
                        </label>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="+7 999 999 99 99"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Поле для сообщения */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message. Max length of 500 characters"
                            maxLength={500}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            rows={5}
                            required
                        />
                    </div>

                    {/* Кнопка отправки */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </div>

                    {/* Сообщение об успешной отправке */}
                    <Transition
                        show={isSubmitted}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <p className="text-center text-green-400 mt-4">
                            Thanks for your feedback!
                        </p>
                    </Transition>
                </form>
            </div>
        </div>
    );
}