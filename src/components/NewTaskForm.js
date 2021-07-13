import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";

function NewTaskForm({ onTaskFormSubmit }) {

  const  [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Code")

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSelectChange(e){
    console.log(e.target.value)
    setSelectedCategory(e.target.value);
  }

   


  return (
    <form className="new-task-form" onSubmit={() => onTaskFormSubmit({"text": input, "category": selectedCategory})}>
      <label>
        Details
        <input onChange={handleInputChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectChange}>
          {/* render <option> elements for each category here */}
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
