            import React from 'react'
            import { Link } from 'react-router-dom'
            import {FormControl,  Row , Button ,Form } from 'react-bootstrap'
            import {formatRubValues}  from '../helpers'

            const AssumMpess = ({assumptions,handleUpdateIncomeSources,handelUpdateIncome ,handelUpdateSavings}) => {
               debugger
                return (
                    <div id='Assumptions'>
                        
                            <Form>
                                    <h3> Ваш вариант:</h3>
                            <Row className='assumption'>
                                    <Form.Control as="select" id='select-income-src' onChange={(e)=>{handleUpdateIncomeSources(e.target.value)}}>
                                <option value='2' selected>Два месяца</option>
                                <option value='3' selected>Три месяца</option>
                                <option value='6' selected>Шесть месяцев</option>
                                </ Form.Control >
                        </Row>
                        <h3> Сколько вы зарабатывайте без учета налогов в месяц?</h3>

                            <div className='input-cont'>
                               
                                <FormControl 
                                id='income'
                                className="dollar-input"
                                defaultValue={formatRubValues (assumptions.income)}
                                type='text'
                                maxLenght='7'
                                onChange={(e)=>
                                    e.target.value = formatRubValues ((e.target.value).replace(",",""))}
                                onBlur={(e)=>
                                 handelUpdateIncome(e.target.value)}
        
                            />
                            </div>
                            <Row className='control-label'>
                                <h3>Сколько у вас сбережений которые  <u> вы не планируйте тратить</u> в ближайшее время?</h3>
                                <div className='input-cont'>
                                   
                                    <FormControl 
                                    id='initialSaving'
                                    className="dollar-input"
                                    defaultValue={formatRubValues(assumptions.initialSaving)}
                                    type='text'
                                    maxLenght='7'
                                    onChange={(e) =>{
                                    e.target.value = formatRubValues((e.target.value).replace(",",""))}}
                                    onBlur={(e)=>{
                                        handelUpdateSavings(e.target.value)}}
                                    />
                                </div>
                            </Row>

                    <Button className='nav-btn' block>
                    <Link className="link" to='/expenses' >Продолжим ввод данных</Link> 
                    </Button>
                    </Form>
            </div>
                )
            }

            export default AssumMpess 