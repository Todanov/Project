        import React from 'react'
        import { Link } from 'react-router-dom'
        import {ButtonGroup , Button} from 'react-bootstrap'





        const Menubar = () => {
        return(
                <ButtonGroup id='menu' justified>
                <Button className="menu-btn" href='#'>
                        <Link className= 'link' to = '/what-is-blagosostoyanie'>Добро Пожаловать</Link>
                </Button>
                <Button className="menu-btn" href='#'>
                        <Link className= 'link' to = '/blagosostoyanie'> Что такое фонд Благосостояния?</Link>
                </Button>
                <Button className="menu-btn" href='#'>
                        <Link className= 'link' to = '/assumptions' >Примерный расчет</Link>
                </Button>
                <Button className="menu-btn" href='#'>
                        <Link className= 'link' to = '/expenses' > Подсчет продолжение</Link>
                </Button>
                <Button className="menu-btn" href='#'>
                        <Link className= 'link' to = '/saving'> План и результат</Link>
                </Button>
                </ButtonGroup>
        )
        }

        export default Menubar