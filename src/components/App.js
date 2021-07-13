import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });





function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  

  const taskFilter = tasks.filter(task => category === "All" || task.category === category)

  function handleSubmit(newTask){
    const newTasks = [...tasks, newTask];
    setTasks(newTasks)
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectCategory={setCategory} selectedCategory={category} categories={CATEGORIES}/>
      <NewTaskForm  onTaskFormSubmit={handleSubmit} category={category}/>
      <TaskList tasks={taskFilter}/>
    </div>
  );
}

export default App;
