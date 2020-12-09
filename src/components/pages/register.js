import React from 'react';
import {Link} from 'react-router-dom';

import './register.css';

const Register = () => {
    return (
        <div className=" intro__register">
            <div className="container">
                <div className="main">
                    <div className="email">
                        <h1 className="register">Почта</h1>
                        <input  type="text" name="name" required placeholder="exempel@mail.com"></input>
                    </div>
                    <div className="register-password">
                        <h1 className="register">Пароль</h1>
                        <input type="password" name="name" required placeholder="введите пароль"></input>
                    </div>
                    <div className="register-password2">
                        <h1 className="register__repeat">Повторите пароль</h1>
                        <input type="password__repeat" name="name" required placeholder="повторите пароль"></input>
                    </div>
                    <div className="link__priem">
                        <Link to="/priem" className="register__link">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;