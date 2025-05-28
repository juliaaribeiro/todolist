import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3 className="mb-4 text-center">📝 Lista de Tarefas</h3>
          <Form className="d-flex mb-3">
            <Form.Control
              type="text"
              placeholder="Digite uma nova tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="primary" onClick={addTask} className="ms-2">
              Adicionar
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((t, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
                variant={t.done ? "success" : ""}
              >
                <span
                  onClick={() => toggleTask(index)}
                  style={{ textDecoration: t.done ? "line-through" : "none", cursor: "pointer" }}
                >
                  {t.text}
                </span>
                <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
                  ❌
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
