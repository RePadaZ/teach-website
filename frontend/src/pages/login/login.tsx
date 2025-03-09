import {useState} from "react";
import {Transition} from "@headlessui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TRPC} from "../../lib/trcp_create.tsx";
import Cookies from "js-cookie";

/* Схема валидации формы */
const validationSchema = Yup.object({
    login: Yup.string().required("Please fill in your login."),
    password: Yup.string().required("Please fill in your password.").min(8),
    rememberMe: Yup.boolean(),
});

export function Login() {
    /* Отображение ошибки от сервера */
    const [serverError, setServerError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const mutation = TRPC.LoginUserForm.useMutation({
        onSuccess: () => {
            setIsSubmitted(true);
            setServerError(null);
            setTimeout(() => setIsSubmitted(false), 3000); // Скрываем сообщение через 3 сек
        },
        onError: (error) => {
            setServerError(error.message);
        },
    });

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
                    <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                        Login to your account
                    </h2>
                    {/* Вызов обработки нажатия и валидация */}
                    <Formik
                        initialValues={{
                            login: "",
                            password: "",
                            rememberMe: false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, {resetForm}) => {
                            setServerError(null);
                            const {token} = await mutation.mutateAsync(values);
                            if (mutation.isSuccess) resetForm();
                            Cookies.set("token", token, {expires: 99999});
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form className="space-y-6">
                                {/* Логин */}
                                <div>
                                    <label htmlFor="login" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Login
                                    </label>
                                    <Field
                                        id="login"
                                        name="login"
                                        type="text"
                                        placeholder="Login"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="login" component="div" className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Пароль */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="password" component="div"
                                                  className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Чекбокс "Запомнить меня" */}
                                <div className="flex items-center justify-center">
                                    <Field
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-600"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                                        Remember login details
                                    </label>
                                    <ErrorMessage name="rememberMe" component="div"
                                                  className="text-red-400 text-sm ml-2"/>
                                </div>
                                {/* Кнопка подтверждения */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
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

                                {/* Сообщение об успешном входе */}
                                <Transition
                                    show={isSubmitted}
                                    enter="transition-opacity duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-center text-green-400 mt-4">Login successful!</p>
                                </Transition>

                                {/* Ошибка от сервера */}
                                {serverError && (
                                    <Transition
                                        show={true}
                                        enter="transition-opacity duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-center text-red-400 mt-4">{serverError}</p>
                                    </Transition>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Transition>
        </div>
    );
}
