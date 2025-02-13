import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Transition} from "@headlessui/react";
import {useState} from "react";
import {FieldFom} from "../../components/field/FieldFom.tsx";

// Определяем типы для данных формы
interface FormState {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

// Начальные значения формы
const initialValues: FormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

// Схема валидации с использованием Yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please fill in your name."),
    email: Yup.string()
        .email("Invalid email address.")
        .required("Please fill in your email."),
    message: Yup.string().required("Please fill in your message."),
});

export function ContactForm() {
    // Состояние для отображения сообщения об успешной отправке
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                    Send us a Message
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        // Здесь можно отправить данные на сервер
                        console.log("Form Data:", values);

                        // Сброс формы
                        resetForm();

                        // Показываем сообщение об успешной отправке
                        setIsSubmitted(true);
                        setTimeout(() => setIsSubmitted(false), 3000);
                    }}
                >
                    {() => (
                        <Form className="space-y-6">
                            <FieldFom label="First name:" id="name" name="name" placeholder="Name" />
                            <FieldFom
                                label="Your email:"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <FieldFom
                                label="Your phone (optional):"
                                id="phone"
                                name="phone"
                                placeholder="+7 999 999 99 99"
                            />
                            <FieldFom
                                label="Your message:"
                                id="message"
                                name="message"
                                placeholder="Write your message. Max length of 500 characters"
                                textarea
                                maxLength={500}
                                rows={5}
                            />

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>

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
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
