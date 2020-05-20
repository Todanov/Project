
export const formatRubValues = (numString) => {
    if(numString === ''){
        return '0'
    }
 
    if (isNaN(numString)){
        return '0'
    }
    let number = Number(numString)
    let formattedNumber = number
    return formattedNumber
}

export const calcTotalExpenses = (expenses) => {

    const totalExpenses = expenses.reduce((total,expense)=>{
        return  total + expense.amount
    },0)
 return totalExpenses
}