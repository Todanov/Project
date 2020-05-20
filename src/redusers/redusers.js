import React from 'react'
import {UPDATE_INCOME, UPDATE_INCOME_SOURCE, UPDATE_SAVINGS ,UPDATE_MOUTHLY_SAVINGS,ADD_EXPENSE,REVOME_EXPENSE, UPDATE_EXPENSE_AMOUT,UPDATE_EXPENSE_NAME,UPDATE_SUMM} from '../action/action'


const inintianalAssumptionState = {
    incomeSource:6,
    income: 0,
    initialSaving: 0
    
}

const assumptionsReducer = (state=inintianalAssumptionState , action) => {
    switch (action.type) {
        case UPDATE_INCOME_SOURCE:
            return {...state, incomeSource:action.source}
        case UPDATE_INCOME:
            return  {...state, income:action.income}
        
        case UPDATE_SAVINGS:
            return {...state, initialSaving: action.saving }

        default :
        return state

    }
}




const initialExpensesState = [
    {id: 'exp_1' , name: 'Аренда' , amount: 0 },
    {id: 'exp_2' , name: 'Питание' , amount: 0},
    {id: 'exp_3' , name: 'Коммунальные услуги' , amount: 0},
   
]


const expensesReducer = (state=initialExpensesState , action) => {

        switch(action.type) {
            case ADD_EXPENSE:
            return Object.assign([],state,[{id:action.id,name:'',amount:0},...state])

                case REVOME_EXPENSE:
                    return state.filter(expense=>{return expense.id !==action.id})

                case UPDATE_EXPENSE_NAME:
                    let {id , newName} = action.payload;
                        return state.map (expense => {
                        if(expense.id === id){
                        expense.name = newName;
                    }   
                    return expense;
                })
                case UPDATE_EXPENSE_AMOUT:
                    let id_1 = action.payload.id ;
                    let  newAmount = action.payload.newAmount;

                    return state.map (expense => {
                        if(expense.id === id_1){
                            expense.amount = newAmount;
                        }
                        return expense;
                    })
                    
                    default:
                        return state;
            }
           
        }


const initialSavingPlanState = {
    monthlySavings : 50
}

const savingsPlanReducer = (state = initialSavingPlanState , action) => {

                switch (action.type) {
                    case UPDATE_MOUTHLY_SAVINGS :
                        return {...state , monthlySavings:action.newAmount}
                        default:
                        return state;
                }
}

export { savingsPlanReducer,expensesReducer,assumptionsReducer}