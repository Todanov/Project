import React from 'react'
import{formatRubValues,calcTotalExpenses } from '../helpers'

const TotalExpenses = ({expenses}) => {

    return (
        <div id='TotalExpenses'>
            <h3>Сумма В месяц</h3>
           
           
            <h3 id='expenses-total' >
                { formatRubValues(calcTotalExpenses(expenses))}руб{ ' '}

            </h3>
        </div>
         
    )
}

export default TotalExpenses