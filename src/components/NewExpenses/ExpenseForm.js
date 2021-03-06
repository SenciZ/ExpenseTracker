import { useState } from "react";
import "./ExpenseForm.css";

// import Expenses from "../Expenses/Expenses";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [focus, setFocus] = useState("focus");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFocus("focus");
    setShowForm(false);
  };

  const showExpenseForm = (e) => {
    if (e.target.textContent === "Add New Expense") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <>
      {showForm === false ? (
        <button onClick={showExpenseForm}>Add New Expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                autoFocus={focus}
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                required
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={showExpenseForm}>
              Cancel
            </button>
            <button type="submit">New Expense</button>
          </div>
        </form>
      )}
    </>
  );
}

export default ExpenseForm;
