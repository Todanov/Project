import SavingPlan  from './SavingPlans'
import { connect } from "react-redux"
import {updateMonthlySavings } from '../action/action'


const mapStateToProps = (state)=>{
    return {
        assumptions:state.assumptions,
        expenses: state.expenses,
        monthlySavings: state.savingsPlan.monthlySavings
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handelUpdateMounthlySavings: (amount) => {
            dispatch(updateMonthlySavings(Number((amount).toString().replace(',',',', ''))))
        }
    }
}


const SavingPlanContainer = connect (
            mapStateToProps, mapDispatchToProps
)(SavingPlan)

export default SavingPlanContainer
