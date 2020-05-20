import {combineReducers} from 'redux'
import { savingsPlanReducer,expensesReducer,assumptionsReducer} from './redusers'



const appReducer = combineReducers ({

    assumptions: assumptionsReducer,
    expenses: expensesReducer,
    savingsPlan:  savingsPlanReducer
})

export default appReducer