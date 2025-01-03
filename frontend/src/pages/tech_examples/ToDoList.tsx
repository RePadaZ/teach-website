import { useState, useCallback } from "react";
import { Button, Form, ListGroup, Container, Row, Col } from "react-bootstrap";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

export function ToDoList() {
    const [tasks, setTasks] = useState<ToDo[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    {/* Добавление задачи */}
    const addTask = useCallback(() => {
        const trimmedTask = newTask.trim();
        if (!trimmedTask) return;

        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), text: trimmedTask, completed: false },
        ]);
        setNewTask("");
    }, [newTask]);

    {/* Универсальное обновление задач */}
    const updateTask = useCallback((id: number, changes: Partial<ToDo>) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, ...changes } : task))
        );
    }, []);

    {/* Переключение состояния задачи */}
    const toggleTaskCompletion = useCallback(
        (id: number) => updateTask(id, { completed: !tasks.find((t) => t.id === id)?.completed }),
        [tasks, updateTask]
    );

    {/* Удаление задачи */}
    const deleteTask = useCallback(
        (id: number) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)),
        []
    );

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center mb-4">To-Do List</h1>
                    <Form className="d-flex mb-3">
                        <Form.Control
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a new task"
                            className="me-2"
                        />
                        <Button variant="primary" onClick={addTask}>
                            Add
                        </Button>
                    </Form>
                    <ListGroup>
                        {tasks.map(({ id, text, completed }) => (
                            <ListGroup.Item
                                key={id}
                                className="d-flex justify-content-between align-items-center"
                            >
                <span
                    onClick={() => toggleTaskCompletion(id)}
                    style={{ cursor: "pointer", textDecoration: completed ? "line-through" : "none" }}
                >
                  {text}
                </span>
                                <Button variant="danger" size="sm" onClick={() => deleteTask(id)}>
                                    Delete
                                </Button>
                            </ListGroup.Item>

                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}
