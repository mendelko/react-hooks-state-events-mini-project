import React, { useState } from "react";
// import { CATEGORIES } from "../data";

function CategoryFilter(props) {


  const categoryButtons = props.categories.map((category) => {
    const className = category === props.selectedCategory ? "selected" : null;
    return (
      <button onClick={() => props.onSelectCategory(category)} key={category} className={className}>{category}</button>
    );
  });




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
