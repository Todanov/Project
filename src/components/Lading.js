    import React from 'react'
    import {Jumbotron,Button} from 'react-bootstrap'
    import {Link} from 'react-router-dom'


    const Lading = () => {
        return (
       
            <div id = 'Landing' className= 'container-fluid'>
            <Jumbotron id ='landing-jumbotron'>
                    <h1> Добро Пожаловать В "Благосостояние"</h1>
                    <h6> Это Демо приложение (которое использует React - React-Router - Redux ) просто считает<strong> Специально для вас!!!</strong> </h6>
                    <Button className= 'nav-btn'>
                        <Link className = 'link' to="/blagosostoyanie">Подробное описание</Link>
                    </Button>
                </Jumbotron>   
            </div>
           
        )
    }

    export default Lading