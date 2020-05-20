import React from 'react'
import Expense from './Expense'
import TotalExpenses from './TotalExpense'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Exprenses = ({ expenses,handleAddExpenses,handelRemoveExpense,handelUpdateExpenseName,handelUpdateExpenseAmount}) => {
 
    return (
        <div className='Exprenses'>
            <h4 id='exprense-header'>Каковы ваши расходы в месяц?</h4>
                    
                    <Button id="add-expense-btn" 
                        onClick ={(e)=>{
                            let id = `exp_${JSON.stringify(Date.now())}`
                            handleAddExpenses(id)
                        }}
                    >
                        Добавить еще статью Расхродов
                    </Button>

                        <ul id='expense-list'>
                            {expenses.map(expense =>
                                <Expense key={expense.id}
                                {...expense}
                                updateExpenseName = {handelUpdateExpenseName}
                                updateExpenseAmout = {handelUpdateExpenseAmount}
                                removeExpense = {handelRemoveExpense}
                                
                                />
                                )}
                        </ul>
                        <TotalExpenses  expenses={expenses}/><br/>

                        <Button className="nav-btn" block>
                            <Link className='link' to='/saving'>Перейти к вашему плану сбережений</Link>
                        </Button>

        </div>
    )
}

export default Exprenses 