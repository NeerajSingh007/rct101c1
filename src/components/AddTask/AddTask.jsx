import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({todo,setTodo,input,setInput}) => {
  // NOTE: do not delete `data-cy` key value pair
  const addText=(e)=>{
    setInput(e.target.value);
  }
  
  const submitBtn=()=>{
    var newTodo={
      id:Math.random()*1000,
      text: input,
      done:false,
      count:1
    };
    if(newTodo.text && newTodo.text !=={...todo}){
      setTodo([...todo,newTodo]);
    }
    console.log(todo);
  }

return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={input} onChange={addText}/>
      <button data-cy="add-task-button" onClick={submitBtn}>+</button>
    </div>
  );
};

export default AddTask;
