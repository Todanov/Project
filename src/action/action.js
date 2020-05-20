
export const UPDATE_INCOME = 'UPDATE_INCOME'
export const UPDATE_INCOME_SOURCE = 'UPDATE_INCOME_SOURCE '
export const UPDATE_SAVINGS = 'UPDATE_SAVINGS '


export const updateIncome = (income)=> {
    return {type: UPDATE_INCOME, income}
}

export const updeteIncomeSource = (source) => {

    return {type: UPDATE_INCOME_SOURCE, source}
}

export const updateSaving = (saving) => {
    return {type:UPDATE_SAVINGS,saving}
}


//expenses

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REVOME_EXPENSE = 'REMOVE_EXPENSE'
export const UPDATE_EXPENSE_NAME = 'UPDATE_EXPENSE_NAME'
export const UPDATE_EXPENSE_AMOUT = 'UPDATE_EXPENSE_AMOUT'


export const addExpens = (id) => {return{type: ADD_EXPENSE , id}}

export const removeExpense = (id) => {return{type: REVOME_EXPENSE , id}}

export const updateExpenseName = (id , newName) => {
    return{
        type: UPDATE_EXPENSE_NAME ,
        payload:{id , newName}  }
}

export const updateExpenseAmout = (id,newAmount) => {
    return {type: UPDATE_EXPENSE_AMOUT , payload: {id, newAmount}}
}




//Saving Plan 
export const UPDATE_MOUTHLY_SAVINGS = 'UPDATE_MOUTHLY_SAVINGS'

export const updateMonthlySavings = (newAmout) => {
    return {type: UPDATE_MOUTHLY_SAVINGS , newAmout}
}
