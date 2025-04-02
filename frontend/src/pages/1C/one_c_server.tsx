import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {TRPC} from "../../lib/trcp_create.tsx";

export function OneCServer() {
    const [output, setOutput] = useState<string | null>(null);

    const QueryOneCServer = TRPC.OneCServer.executeScript.useMutation({
        onSuccess: (data) => {
            const output = String(data?.output); // Принудительное преобразование в строку
            setOutput(output);
            console.log("Execution Result:", output);
        },
        onError: (error) => {
            console.error("Execution error:", error);
            const output = error.toString();
            setOutput(output);
        },
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-center mb-8">
                Введите код 1С и запустите его для тестирования.
            </h1>

            {/* Форма */}
            <Formik
                initialValues={{code: ""}}
                onSubmit={async (values) => {
                    await QueryOneCServer.mutateAsync({scriptString: values.code});
                }}
            >
                {({isSubmitting}) => (
                    <Form className="max-w-xl mx-auto p-4 border rounded-lg shadow-lg bg-gray-800">
                        {/* Поле ввода кода */}
                        <Field
                            as="textarea"
                            name="code"
                            className="w-full h-40 p-2 rounded bg-gray-900 text-white border border-gray-700"
                            placeholder="Введите код 1С..."
                        />

                        {/* Кнопка запуска */}
                        <button
                            type="submit"
                            className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Запускаем..." : "Запустить код"}
                        </button>
                    </Form>
                )}
            </Formik>
            {/* Вывод результата */}
            {output && (
                <div className="max-w-xl mx-auto mt-4 p-4 bg-gray-700 rounded-lg">
                    <h2 className="text-xl font-bold">Результат:</h2>
                    <pre className="mt-2 p-2 bg-gray-800 rounded text-green-400 whitespace-pre-wrap break-words">
                        {output}
                    </pre>
                </div>
            )}
        </div>
    );
}
