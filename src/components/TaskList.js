import React from "react";
import Task from "./Task";

function TaskList(props) {
  console.log(props.tasks)
  return (
    <div className="tasks">
      <ul>
      {props.tasks.map((task) => (
         <Task key={task.text} text={task.text} category={task.category} />
      ))}
      </ul>
    </div>
  );
}

export default TaskList;
