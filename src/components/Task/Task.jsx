import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({todo,setTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const deleteHandle=(todos) => {
    setTodo(todos.filter((e)=> e.id !== todos.id))
  };
  return (
    <>
    {todo.map((todos)=>(
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{todos.text}</div>
      {/* Counter here */}
      <Counter count={todos.count} />
      <button data-cy="task-remove-button" onClick={()=>deleteHandle(todo)}>x</button>
    </li>
  ))}
  </>
  );
};

export default Task;
