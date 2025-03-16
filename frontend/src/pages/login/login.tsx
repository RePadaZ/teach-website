import {useState} from "react";
import {Transition} from "@headlessui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TRPC} from "../../lib/trcp_create.tsx";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

/* Схема валидации */
const validationSchema = Yup.object({
    login: Yup.string().matches(/^(?!\s*$)/, "Login cannot be only spaces and must contain letters.").required("Please fill in your login."),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Please fill in your password."),
});

export function Login() {

    // navigate для переадресации
    const navigate = useNavigate();
    
    // Ошибки с сервера
    const [serverError, setServerError] = useState<string | null>(null);

    // Вызов TRPC utils для сброса валидации даныых и перезапроса их на севере
    const trpcUtils = TRPC.useUtils();

    const mutation = TRPC.LoginUserForm.useMutation({
        onSuccess: ({token}) => {
            setServerError(null);
            Cookies.set("token", token, {expires: 99999});
            trpcUtils.invalidate();
            navigate("/");
        },
        onError: (error) => setServerError(error.message),
    });

    const handleSubmit = async (values: { login: string; password: string; }) => {
        setServerError(null);
        try {
            await mutation.mutateAsync(values);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
            <Transition appear show enter="transition-opacity duration-1000" enterFrom="opacity-0"
                        enterTo="opacity-100">
                <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">Login to your account</h2>

                    <Formik initialValues={{login: "", password: "", rememberMe: false}}
                            validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({isSubmitting}) => (
                            <Form className="space-y-6">
                                {/* Поля формы */}
                                {[
                                    {label: "Your Login", name: "login", type: "text", placeholder: "Login"},
                                    {label: "Password", name: "password", type: "password", placeholder: "Password"},
                                ].map(({label, name, type, placeholder}) => (
                                    <div key={name}>
                                        <label htmlFor={name}
                                               className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                                        <Field id={name} name={name} type={type} placeholder={placeholder}
                                               className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"/>
                                        <ErrorMessage name={name} component="div"
                                                      className="text-red-400 text-sm mt-1"/>
                                    </div>
                                ))}

                                {/* Чекбокс "Запомнить меня" */}
                                <div className="flex items-center justify-center">
                                    <Field id="rememberMe" name="rememberMe" type="checkbox"
                                           className="w-5 h-5 text-blue-500 rounded focus:ring-blue-600"/>
                                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">Remember login
                                        details</label>
                                </div>

                                {/* Кнопка отправки */}
                                <button type="submit" disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Login
                                </button>

                                {/* Ссылка на регистрацию */}
                                <p className="text-center text-gray-400">
                                    Don't have an account?{" "}
                                    <a href="/sign" className="text-blue-400 hover:text-blue-300 underline">Sign up</a>
                                </p>

                                {/* Ошибка от сервера */}
                                {serverError && (
                                    <Transition show enter="transition-opacity duration-300" enterFrom="opacity-0"
                                                enterTo="opacity-100" leave="transition-opacity duration-300"
                                                leaveFrom="opacity-100" leaveTo="opacity-0">
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
