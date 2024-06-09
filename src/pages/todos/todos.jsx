import { Card } from "@mui/material";
import "./todos.css";
import { CardTitle } from "reactstrap";
import AddModal from "../../components/AddModal";
import { useState } from "react";
import TaskItem from "../../components/TaskItem";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px 40px",
        marginTop: "50px"
      }}
    >
      <Card
        style={{
          maxWidth: "300px",
          width: "100%",
          marginLeft: "300px",
          boxShadow: "2px 2px 2px 2px #bdbdbd"
        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Open
        </CardTitle>
        {tasks
          .filter((item) => item.status === "open")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
      <Card
        style={{
          maxWidth: "300px",
          width: "100%",
          boxShadow: "2px 2px 2px 2px #bdbdbd"
        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Pending
        </CardTitle>
        {tasks
          .filter((item) => item.status === "pending")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
      <Card
        style={{
          maxWidth: "300px",
          width: "100%",
          marginLeft: "300px",
          boxShadow: "2px 2px 2px 2px #bdbdbd"
        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          InProgress
        </CardTitle>
        {tasks
          .filter((item) => item.status === "inProgress")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
      <Card
        style={{
          maxWidth: "300px",
          width: "100%",
          boxShadow: "2px 2px 2px 2px #bdbdbd"
        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Complete
        </CardTitle>
        {tasks
          .filter((item) => item.status === "complete")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
    </div>
  );
};

export default Todos;
