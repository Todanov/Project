import { connect } from "react-redux"
import Exprenses from './Expressions'
import {addExpens,removeExpense,updateExpenseName,updateExpenseAmout } from '../action/action'


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddExpenses:(id) =>{
            dispatch (addExpens(id))
        },

        handelRemoveExpense : (id) => {
            dispatch (removeExpense(id))
        },
        handelUpdateExpenseName: (id , newName) => {
            dispatch ( updateExpenseName(id , newName))
        },
        handelUpdateExpenseAmount: (id,  newAmount) => {
            dispatch (updateExpenseAmout (id,  newAmount))
        },
      
    }
}

const ExpensesContainer = connect (mapStateToProps,mapDispatchToProps)(Exprenses)

export default ExpensesContainer