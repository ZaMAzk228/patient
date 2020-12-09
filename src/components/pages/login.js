import React from 'react';
import {Link} from 'react-router-dom';

import './login.css';

const Login = () => {
    return (
                <div className="login__wrapper">
                    <div className="login__email">
                        <h1 className="login__text">Почта</h1>
                        <input type="password__repeat" name="name" required placeholder="повторите пароль"></input>
                    </div>
                    <div className="login__email">
                        <h1 className="login__text">Введите пароль</h1>
                        <input type="password__repeat" name="name" required placeholder="повторите пароль"></input>
                    </div>
                        <Link to="/priem" className="login__link">Войти</Link>
                </div>
    )
}

export default Login;