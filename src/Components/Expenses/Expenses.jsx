import React,{useState} from 'react'
import Cards from '../UI/Cards';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 return (
    <Cards className="expenses">
   <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
   <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items={filteredExpenses} />


   </Cards>
  )
}

export default Expenses