import {useState} from "react";
import {Transition} from "@headlessui/react";

export function Sign() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = () => {
        console.log("Login:", login, "Email:", email, "Password:", password, "Repeat Password:", repeatPassword, "Agree Terms:", agreeTerms);
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
                        Create an account
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

                        {/* Поле для email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="mail@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                        {/* Поле для повторного ввода пароля */}
                        <div>
                            <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                Repeat your password
                            </label>
                            <input
                                id="repeatPassword"
                                type="password"
                                placeholder="Repeat Password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                required
                            />
                        </div>

                        {/* Чекбокс "Согласие с условиями" */}
                        <div className="flex items-center justify-center">
                            <input
                                id="agreeTerms"
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-600"
                            />
                            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-300">
                                I agree all statements in{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                                    Terms of service
                                </a>
                            </label>
                        </div>

                        {/* Кнопка отправки */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Register
                            </button>
                        </div>

                        {/* Ссылка на вход */}
                        <p className="text-center text-gray-400">
                            Have already an account?{" "}
                            <a href="/login" className="text-blue-400 hover:text-blue-300 underline">
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </Transition>
        </div>
    );
}