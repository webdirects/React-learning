import React from "react";
import "./ExpenseItem.css"

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">
        <h2>$294.67</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
