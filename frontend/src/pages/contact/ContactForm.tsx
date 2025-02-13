import { useState, useCallback, useReducer, useEffect } from "react";
import { Transition } from "@headlessui/react";

// Типы для формы
interface FormState {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

// Инициализация формы
const initialFormState: FormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

// Редюсер для управления формой
function formReducer(state: FormState, action: { type: string; payload: string }) {
    return { ...state, [action.type]: action.payload };
}

export function ContactForm() {
    // Управление состоянием формы через useReducer
    const [formData, dispatch] = useReducer(formReducer, initialFormState);

    // Состояние для отображения сообщения об успешной отправке
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Универсальный обработчик изменений
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch({ type: name, payload: value });
    }, []);

    // Валидация формы
    const validateForm = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    // Обработчик отправки формы
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();

        if (!validateForm()) return;

        console.log("Form Data:", formData);

        // Очистка полей формы
        Object.keys(initialFormState).forEach((key) =>
            dispatch({ type: key, payload: "" })
        );

        // Отображение сообщения
        setIsSubmitted(true);
    }, [formData]);

    // Автоматическое скрытие сообщения об успешной отправке
    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase">
                    Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                        { id: "name", type: "text", label: "First name", placeholder: "Name", required: true },
                        { id: "email", type: "email", label: "Your email", placeholder: "Email", required: true },
                        { id: "phone", type: "text", label: "Your phone (optional)", placeholder: "+7 999 999 99 99", required: false }
                    ].map(({ id, type, label, placeholder, required }) => (
                        <div key={id}>
                            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                                {label}:
                            </label>
                            <input
                                id={id}
                                type={type}
                                name={id}
                                placeholder={placeholder}
                                value={formData[id as keyof FormState] || ""}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required={required}
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message. Max length of 500 characters"
                            maxLength={500}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            rows={5}
                            required
                        />
                    </div>

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
                </form>
            </div>
        </div>
    );
}
