import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  );

  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
