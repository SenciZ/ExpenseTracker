import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">No Items Found.</h2>;
  }
  return props.items.map((item, index) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        ></ExpenseItem>
      </ul>
    );
  });
};

export default ExpensesList;
