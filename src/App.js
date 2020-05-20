    import React from 'react';
    import './App.css';
    import Lading from './components/Lading'
    import Blagosostoyanie from './components/Blagosostoyanie';
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
      import AssumptionsContainer from './components/AssumotionsContainer'
      import ExpensesContainer from './components/ExpensesContainer '
      import Menubar from './components/Menu';
      import SavingPlan from './components/SavingPlans'
      import SavingPlanContainer from './components/SavingPlanContainer'
    const App = (store) => {
     
      return (
      <Router>
        <Menubar />
        <Route exact path='/what-is-blagosostoyanie' component={Lading}/>
        <Route exact path="/blagosostoyanie" component={Blagosostoyanie}/>
        <Route exact path='/assumptions'  component = { AssumptionsContainer } store={store.assumptions}/>
        <Route exact path='/expenses' component = {ExpensesContainer}  store={store.expenses}/>
        <Route exact path='/saving' component = {SavingPlanContainer}  store={store}/>
          </Router>
      )
    }

    export default App;
