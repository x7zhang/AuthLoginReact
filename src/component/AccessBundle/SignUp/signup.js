//signup form
//username
//password
//email
//profile pic?

//input change
//email validation

//store in localstorage to monitor database
// we should encryp user info, but inorder to simplifier it
// we just creat an simple encryption fun
//data format:
// {
//    username: '',
//    email: '',
//    password: '',
// }

import React, { useState, useContext } from 'react';
import { validation } from '../../../util/utils';
import { UserContext } from '../../../context/UserContext';
import useForm from '../useForm';
import sha1 from 'sha1';

const SignUp = () => {

    const { state, dispatch } = useContext(UserContext);
    const { values, errors, hanleChange, handleSubmit } = useForm('signup', toSignUp, validation);



    function toSignUp() {
        values.session = sha1(values.password + values.username);
        dispatch(
            {
                type: 'SIGN_UP',
                user: values
            }
        );
    }
    return (
        <div className="login-form right-label-form" id="login-login-form" acceptCharset='UTF-8' >
            <div id='signup-username' className='field'>
                <label htmlFor='signup-username-field'>UserName</label>
                <input type='text' name='username' value={values.username || ''} onChange={(e) => hanleChange(e)} id='signup-username-field' required='required' />
                {
                    errors.username && (<div className={`error-message ${errors.username && 'error-danger'}`} >{errors.username}</div>)
                }
            </div>
            <div id='signup-email' className='field'>
                <label htmlFor='signup-email-filed'>Email</label>
                <input type='text' name='email' value={values.email || ''} onChange={(e) => hanleChange(e)} id='signup-email-field' required='required' />
                {
                    errors.email && (<div className={`error-message ${errors.email && 'error-danger'}`} >{errors.email}</div>)
                }

            </div>
            <div id='signup-password' className='field'>
                <label htmlFor='signup-password-filed'>PassWord</label>
                <input type='password' name='password' value={values.password || ''} onChange={(e) => hanleChange(e)} id='signup-password-field' required='required' />
                {
                    errors.password && (<div className={`error-message ${errors.password && 'error-danger'}`} >{errors.password}</div>)
                }
            </div>
            <div id='signup-error'></div>
            <div>
                <label className='spacing-label'>&nbsp;</label>
                <button id='signup-in-button' onClick={handleSubmit} className='recaptcha-trigger-button button green action-button expand-right'>
                    <span className='label'>Sign Up</span>
                    <span className='spinner'></span>
                </button>
            </div>

        </div>
    );
};

export default SignUp;