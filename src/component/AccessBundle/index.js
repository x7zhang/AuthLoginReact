//accessbundle process:
//accessbundle = (param) => {
//    if param == 'LOGIN':
//        render(<LogIn /> | Need an Account?)
//    if param == 'SIGNUP':
//        render(<Have an Account? | <SignUp />)
//}
// Account ==> click ==> re-render accessbundle
import React, { useState } from 'react';
import LogIn from './LogIn/login';
import SignUp from './SignUp/signup';
import './accessbundle.scss';

const AccessBundle = (order) => {
    const [getOrder, setOrder] = useState(order.target.toUpperCase());

    const orderReload = () => {
        if (getOrder === 'SIGNUP') {
            setOrder('LOGIN');
        }
        else if (getOrder === 'LOGIN') {
            setOrder('SIGNUP');
        }
    };
    return (
        <div className='login-wrap'>
            <header className='login-head'>
                <div className='login-log'></div>
                <h2 className='little-big-head'>Happy Bored</h2>
            </header>
            <div className='flex-grid'>
                <div className='login-half left'>
                    {getOrder === 'SIGNUP' ? <div className='login-order-help' onClick={() => orderReload()}>Have an Account ?</div> : <LogIn />}
                </div>

                <div className='login-divider'>
                    <div className='bar bar-top'></div>
                    <span className='login-or'>OR</span>
                    <div className='bar bar-bottom'></div>
                </div>

                <div className='login-half right'>
                    {getOrder === 'LOGIN' ? <div className='login-order-help' onClick={() => orderReload()}>Need an Account ?</div> : <SignUp />}
                </div>
            </div>
        </div>
    );
};

export default AccessBundle;