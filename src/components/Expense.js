    import React from 'react'
    import  {FormControl,InputGroup} from 'react-bootstrap'
    import {formatRubValues} from '../helpers'
    

    const Expense = ({key,id,name,amount,updateExpenseName,updateExpenseAmout,removeExpense}) => {
  
        return(
            <li className='expense-item'>
                    <FormControl 
                    className='expense-name'
                    type='text'
                    defaultValue={name}
                    placeholder ='Расходная позиция'
                    onChange={(e)=> {
                        updateExpenseName(id,e.target.value)
                    }}
                    />

                    <InputGroup className ='expense-amt-group'>
                               
                            <FormControl 
                                className='expense-amt'
                                type='text'
                                maxLenght='7'
                                defaultValue={formatRubValues(amount)}
                                onChange={(e) => {
                                e.target.value = formatRubValues((e.target.value).replace(',','')) }}
                                onBlur={(e)=>{
                                    updateExpenseAmout(id, Number(e.target.value))}}
                                    />
                                    <span className="remove-expense"
                                            onClick={(e)=> removeExpense(id)}
                                    >x</span>
                    </InputGroup>



            </li>

                
        )
    }

    export default Expense