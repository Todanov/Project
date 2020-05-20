            import React from 'react'
            import {formatRubValues,calcTotalExpenses} from '../helpers'
           

            const SavingPlan = ( {assumptions, expenses,}) => {
            
                if(assumptions.income === 0 || calcTotalExpenses(expenses) === 0){
                    return(
                        <div>
                                <h3>
                                    {assumptions.income === 0 ? `Вы указали не все данные `: ''}
                                </h3>
                                <br/>
                                <h3>
                                    {calcTotalExpenses(expenses) === 0 ? `Вам необходимо указать расходы`: ''}
                                </h3>
                        </div>
                    )
                }
                else {
                        const 
                            allSumm = assumptions.income, //сумма дохода
                            InitianalSavings = assumptions.initialSaving,// сберержения
                            allMonthlyExpenses = calcTotalExpenses(expenses),//количество расходов в месяц
                            yourcallMouth = Number (assumptions.incomeSource),//сколько месяцов необходмо накопить
                            initialSavingsmy = formatRubValues(InitianalSavings),//перевод сохраненых денег
                            allSummimg = formatRubValues(allSumm), //перевод дохода

                            myBlagosostoyanie = allMonthlyExpenses*yourcallMouth ,//фонд расходы * на кол-во месяцов
                            ifYouhaveSavings = myBlagosostoyanie- initialSavingsmy, //если есть условия сбережения
                            
                            afterAllSumm = allSummimg - allMonthlyExpenses, // остаток денег после расходов

                            result1 = myBlagosostoyanie / allMonthlyExpenses ,// кол-во месяцов без условия сбережения
                            result2 = ifYouhaveSavings/allMonthlyExpenses ;// кол-во месяцов с условием сбережения

                        
                    return (

                    <div id= 'SavingsPlan'>
                        <h1>План Сбережений</h1>

                        <h3>
                 Вам необходимо, чтобы ваш  фонд Благосостояния покрывал  <strong>{yourcallMouth}</strong>  месяцa-(ев) расходов.
                        </h3>
                { ' ' } <br/>
                <h3> Исходя из ваших ежемесячных расходов в размере <strong>{allMonthlyExpenses}руб</strong>,
                ваша цель экономии состовляет <strong>{myBlagosostoyanie}руб</strong>.</h3>
                { ' ' }<br/>

                <h3> Так как вы <strong>{initialSavingsmy > 0 ? ` имеете сбережения ${initialSavingsmy} руб`:` не имеете сбережений `}</strong>
                {" "}в вашем фонде Благосостояния. То  {initialSavingsmy > 0 ? `ваш результат около ${Math.ceil(result2)}`: `ваш результат  примерно  ${Math.ceil(result1)}`} 
                <strong>{" "}месяцa-(ев) {""}</strong> 
                для создания фонда.</h3>
                    
                { ' ' }<br/>
                    <h3>Ознакомительная версия "Планировщика", сделано в учебнных целях! Спасибо за Внимание </h3>
                   </div>
            
                
                )
            }
        }
            export default SavingPlan