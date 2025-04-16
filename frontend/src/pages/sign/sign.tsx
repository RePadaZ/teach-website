import {Transition} from "@headlessui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TRPC} from "../../lib/trcp_create.tsx";
import {useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";


/* Схема валидации формы */
const validationSchema = Yup.object({
    login: Yup.string().required("Пожалуйста, введите свой логин."),
    email: Yup.string().email("Неверный адрес электронной почты.").required("Пожалуйста, введите свою электронную почту."),
    password: Yup.string().required("Пожалуйста, введите свой пароль.").min(8),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Пароли должны совпадать")
        .required("Пожалуйста, подтвердите свой пароль."),
    agreeTerms: Yup.boolean().oneOf([true], "Вы должны согласиться с условиями."),
});

export function Sign() {

    const navigate = useNavigate();
    /* Отображение надписи */
    const [serverError, setServerError] = useState<string | null>(null)

    // Вызов TRPC utils для сброса валидации даныых и перезапроса их на севере
    const trpcUtils = TRPC.useUtils();

    const mutation = TRPC.CreateUserForm.useMutation({
        onSuccess: ({token}) => {
            setServerError(null);
            Cookies.set("token_session_teach_website", token, {expires: 99999});
            trpcUtils.invalidate();
            navigate("/");
        },
        onError: (error) => setServerError(error.message),
    });

    const handleSubmit = async (values: { login: string; email: string; password: string, agreeTerms: boolean }) => {
        setServerError(null);
        try {
            await mutation.mutateAsync(values);
        } catch (error) {
            console.error(error);
        }
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
                    <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                        Создать аккаунт
                    </h2>
                    {/* Вызов обработки нажатия и валидация */}
                    <Formik
                        initialValues={{
                            login: "",
                            email: "",
                            password: "",
                            repeatPassword: "",
                            agreeTerms: false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting}) => (
                            <Form className="space-y-6">
                                {/* Логин */}
                                <div>
                                    <label htmlFor="login" className="block text-sm font-medium text-gray-300 mb-2">
                                        Ваш логин
                                    </label>
                                    <Field
                                        id="login"
                                        name="login"
                                        type="text"
                                        placeholder="Логин"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="login" component="div" className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Емаил */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Ваша электронная почта
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="mail@example.com"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Пароль */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                        Ваш пароль
                                    </label>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Пароль"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="password" component="div"
                                                  className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Повторный пароль */}
                                <div>
                                    <label htmlFor="repeatPassword"
                                           className="block text-sm font-medium text-gray-300 mb-2">
                                        Повторите ваш пароль
                                    </label>
                                    <Field
                                        id="repeatPassword"
                                        name="repeatPassword"
                                        type="password"
                                        placeholder="Повторите ваш пароль"
                                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                    <ErrorMessage name="repeatPassword" component="div"
                                                  className="text-red-400 text-sm mt-1"/>
                                </div>
                                {/* Правила сервиса */}
                                <div className="flex items-center justify-center">
                                    <Field
                                        id="agreeTerms"
                                        name="agreeTerms"
                                        type="checkbox"
                                        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-600"
                                    />
                                    <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-300">
                                        Я согласен со всем в {" "}
                                        <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                                            Terms of service
                                        </a>
                                    </label>
                                    <ErrorMessage name="agreeTerms" component="div"
                                                  className="text-red-400 text-sm ml-2"/>
                                </div>
                                {/* Кнопка подтверждения */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                                {/* Ссылка на логин */}
                                <p className="text-center text-gray-400">
                                    Уже есть аккаунт? {" "}
                                    <a href="/login" className="text-blue-400 hover:text-blue-300 underline">
                                        Войти тут
                                    </a>
                                </p>

                                {/* Ошибка сервера */}
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