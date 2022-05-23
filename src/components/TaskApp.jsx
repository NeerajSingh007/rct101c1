import React from "react";
import { useState } from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import tasks from "../data/tasks.json";
import TaskHeader from "./TaskHeader/TaskHeader";
const TaskApp = () => {
const[todo,setTodo] = useState(tasks);
const[input,setInput] = useState("");

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <h1>Todo List</h1>
      {/* Add Task */}
      <AddTask input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
      {/* Tasks */}
      <Tasks todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default TaskApp;
