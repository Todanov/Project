import { connect } from "react-redux"
import AssumMpess from './AssuMpess '
import {updateIncome,updeteIncomeSource,updateSaving} from '../action/action'


const mapStateToProps = (state) => {
    return {
        assumptions: state.assumptions
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateIncomeSources:(sources) =>{
            dispatch (updeteIncomeSource(Number(sources)))
        },

        handelUpdateIncome : (income) => {
            dispatch (updateIncome(
                Number((income).replace(',',''))
            ))
        },
        handelUpdateSavings: (saving) => {
            dispatch (updateSaving (Number((saving).replace(',',''))

            ))
        },
    }
}

 const AssumptionsContainer = connect (mapStateToProps,mapDispatchToProps)(AssumMpess)

 export default AssumptionsContainer