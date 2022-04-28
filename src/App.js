import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const App = () => {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [expensesState, setExpensesState] = useState([]);

  const addExpenseHandler = function (expense) {
    console.log("In App Js");
    console.log(expense);
    setExpensesState([...expensesState, expense]);
    console.log(expensesState);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesState} />
      {/* The line above is basically the same as Expenses(items); In which items is the expenses array and is being sent down to the Expenses component using the props(arguments) of the Expenses component function  */}
    </div>
  );
};

export default App;
