import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/taskList";
import { useState } from "react";

function App({ onCreate }) {
  const [tasks, setTasks] = useState([]);
  onCreate = (task, person) => {
    //console.log('Task created')
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        task,
        person,
      },
    ];
    setTasks(createdTasks);
  };

  const onClear = (id) => {
    const deletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletedTasks);
  };
  return (
    <>
      <CreateTask onCreate={onCreate} />
      <TaskList tasks={tasks} onClear={onClear} />
    </>
  );
}

export default App;
