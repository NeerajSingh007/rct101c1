import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
 const[count,setCount] = useState(1);
 const handleClick = (value) => {
   if(count>0)
   setCount(count+value)
 }



  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"  onClick={() =>handleClick(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={() =>handleClick(-1)}>-</button>
    </div>
  );
};

export default Counter;
