import {useCallback, useState} from "react";
import {Transition} from "@headlessui/react";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

export function ToDoList() {
    const [tasks, setTasks] = useState<ToDo[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    // Добавление задачи
    const addTask = useCallback(() => {
        const trimmedTask = newTask.trim();
        if (!trimmedTask) return;

        setTasks((prevTasks) => [
            ...prevTasks,
            {id: Date.now(), text: trimmedTask, completed: false},
        ]);
        setNewTask("");
    }, [newTask]);

    // Универсальное обновление задач
    const updateTask = useCallback((id: number, changes: Partial<ToDo>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? {...task, ...changes} : task))
        );
    }, []);

    // Переключение состояния задачи
    const toggleTaskCompletion = useCallback(
        (id: number) => updateTask(id, {completed: !tasks.find((t) => t.id === id)?.completed}),
        [tasks, updateTask]
    );

    // Удаление задачи
    const deleteTask = useCallback(
        (id: number) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)),
        []
    );

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-6">
            <div className="max-w-2xl mx-auto">
                {/* Заголовок */}
                <h1 className="text-3xl font-bold text-center text-white mb-8">To-Do List</h1>

                {/* Форма для добавления задачи */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        onClick={addTask}
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add
                    </button>
                </div>

                {/* Список задач */}
                <div className="space-y-3">
                    {tasks.map(({id, text, completed}) => (
                        <Transition
                            key={id}
                            appear={true}
                            show={true}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <div
                                className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                {/* Текст задачи */}
                                <span
                                    onClick={() => toggleTaskCompletion(id)}
                                    className={`flex-1 cursor-pointer ${
                                        completed ? "line-through text-gray-400" : "text-white"
                                    }`}
                                >
                                    {text}
                                </span>

                                {/* Кнопка удаления */}
                                <button
                                    onClick={() => deleteTask(id)}
                                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </Transition>
                    ))}
                </div>
            </div>
        </div>
    );
}