import { MdDelete } from "react-icons/md";
import { Button } from "reactstrap";

const TaskItem = ({ task, setTasks, tasks }) => {
  const handDelete = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    setTasks(tasks);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginRight: "20px"
      }}
    >
      <p>{task.name}</p>
      <Button onClick={() => handDelete(task.id)} style={{backgroundColor: "#ff7043"}}>
        <MdDelete size={24} />
      </Button>
    </div>
  );
};

export default TaskItem;
