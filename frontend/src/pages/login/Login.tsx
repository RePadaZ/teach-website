import { useState } from "react";
import { Transition } from "@headlessui/react";

export function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = () => {
        console.log("Login:", login, "Password:", password, "Remember Me:", rememberMe);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <Transition
                appear={true}
                show={true}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                    {/* Заголовок формы */}
                    <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                        Login to your account
                    </h2>

                    {/* Форма */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Поле для логина */}
                        <div>
                            <label htmlFor="login" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Login
                            </label>
                            <input
                                id="login"
                                type="text"
                                placeholder="Login"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                required
                            />
                        </div>

                        {/* Поле для пароля */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                required
                            />
                        </div>

                        {/* Чекбокс "Запомнить меня" */}
                        <div className="flex items-center justify-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-600"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                                Remember login details
                            </label>
                        </div>

                        {/* Кнопка отправки */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>
                        </div>

                        {/* Ссылка на регистрацию */}
                        <p className="text-center text-gray-400">
                            You don't have an account yet?{" "}
                            <a href="/sign" className="text-blue-400 hover:text-blue-300 underline">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </Transition>
        </div>
    );
}