import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FieldFom } from "../../components/field/FieldFom.tsx";
import { TRPC } from "../../lib/trcp-create.tsx";

// Схема валидации формы
const contactSchema = Yup.object().shape({
    name: Yup.string().required("Please fill in your name."),
    email: Yup.string().email("Invalid email address.").required("Please fill in your email."),
    phone: Yup.string().optional(),
    message: Yup.string().required("Please fill in your message.").max(500, "Message is too long."),
});

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const mutation = TRPC.CreateContactForm.useMutation({
        onSuccess: () => {
            setIsSubmitted(true);
            console.log("Successfully created contact");
            setTimeout(() => setIsSubmitted(false), 3000); // Скрываем сообщение через 3 сек
        },
        onError: (error) => {
            console.error("Submission error:", error);
        },
    });

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">Send us a Message</h2>

                <Formik
                    initialValues={{ name: "", email: "", phone: "", message: "" }}
                    validationSchema={contactSchema}
                    // Передаем данные на сервер для обработки
                    onSubmit={async (values, { resetForm }) => {
                        await mutation.mutateAsync(values);
                        if (!mutation.isError) resetForm();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <FieldFom label="First name:" id="name" name="name" placeholder="Name" />
                            <FieldFom label="Your email:" id="email" name="email" type="email" placeholder="Email" />
                            <FieldFom label="Your phone (optional):" id="phone" name="phone" placeholder="+7 999 999 99 99" />
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
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-500"
                                    disabled={isSubmitting || mutation.isLoading}
                                >
                                    {mutation.isLoading ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {mutation.isError && (
                                <p className="text-center text-red-400 mt-4">Error submitting form. Please try again.</p>
                            )}

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
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
