import {Transition} from "@headlessui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TRPC} from "../../lib/trcp_create.tsx";
import {useState} from "react";


/* Схема валидации формы */
const validationSchema = Yup.object({
    login: Yup.string().required("Please fill in your name."),
    email: Yup.string().email("Invalid email address.").required("Please fill in your email."),
    password: Yup.string().required("Please fill in your password.").min(8),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password."),
    agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms."),
});

export function Sign() {

    /* Отображение надписи */
    const [serverError, setServerError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const mutation = TRPC.CreateUserForm.useMutation({
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
                        Create an account
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
                        onSubmit={async (values, {resetForm}) => {
                            setServerError(null);
                            await mutation.mutateAsync(values);
                            if (!mutation.isError) resetForm();
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
                                {/* Емаил */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Email
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
                                {/* Повторный пароль */}
                                <div>
                                    <label htmlFor="repeatPassword"
                                           className="block text-sm font-medium text-gray-300 mb-2">
                                        Repeat your password
                                    </label>
                                    <Field
                                        id="repeatPassword"
                                        name="repeatPassword"
                                        type="password"
                                        placeholder="Repeat Password"
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
                                        I agree all statements in {" "}
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
                                        Register
                                    </button>
                                </div>

                                <p className="text-center text-gray-400">
                                    Have already an account? {" "}
                                    <a href="/login" className="text-blue-400 hover:text-blue-300 underline">
                                        Login here
                                    </a>
                                </p>
                                {/* Выводим сообщеение об успешной регистрации */}
                                <Transition
                                    show={isSubmitted}
                                    enter="transition-opacity duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-center text-green-400 mt-4">Thanks for your feedback!</p>
                                </Transition>

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