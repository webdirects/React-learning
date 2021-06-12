import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";    

const ExpenseItem = (props) => {
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.amount}</h2>
      </div>
    </Card>
  );
};

export default ExpenseItem;
