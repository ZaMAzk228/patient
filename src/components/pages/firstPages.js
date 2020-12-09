import React from 'react';
import {Link} from 'react-router-dom';

import './firstPages.css';

const FirstPages = () => {
    return (
        <div className="firstPages">
            <div className="firstPages__container">
                <div className="firstPages__wrapper">
                    <img className="firstPages__img" src="../net_bungie-removebg-preview.png"></img>
                    <div className="first__content-wrapper">
                        <Link to="/register" className="firstPages__link">Зарегистрироваться</Link>
                        <h1 className="firstPages__text">ИЛИ</h1>
                        <Link to="/login" className="firstPages__link2">Войти</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default FirstPages; 