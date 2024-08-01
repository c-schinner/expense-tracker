import {useState} from 'react'
import './index.css';
import ExpenseList from "./components/ExpenseList.jsx";
import ExpenseFilter from "./components/ExpenseFilter.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";

function App() {
    const [expenses, setExpenses] = useState([
        {id: 1, description: "rent", amount: 2000, category: "home"},
        {id: 2, description: "milk", amount: 8, category: "groceries"},
        {id: 3, description: "movie", amount: 60, category: "entertainment"},
        {id: 4, description: "electricity bill", amount: 150, category: "utilities"},
        {id: 5, description: "streaming services", amount: 70, category: "personal"}
    ]);

    const addItem = (data) => {
        console.log(data);
        setExpenses(() => [
            ...expenses, data
        ])
    }

    const deleteItem = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const filterItem = (cat) => {
        setExpenses(expenses.filter(expense => expense.category === cat))
    }


  return (
    <>
        <ExpenseForm addExpense={addItem}/>
        <ExpenseFilter filterItem={filterItem} />
      <ExpenseList items={expenses} deleteItem={deleteItem} />
    </>
  )
}

export default App
