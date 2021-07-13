import React, { useState } from "react";
import { TASKS }  from "../data";

function Task(props) {

  const [tasks, setTasks] = useState(false)
  

  function handleRemove(e){
    const newTasks = TASKS.filter((task) => task.text !== e.target.id );
    setTasks(newTasks);
    e.target.parentElement.remove()
 };

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" id={props.text} onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
