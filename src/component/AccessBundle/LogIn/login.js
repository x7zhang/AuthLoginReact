//log in form
//check if username + password matched on our history.
//create authentication token, store in cookie/localstorage
//authentication token to help long time login

//input change

import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { validation, setCookie, getCookie } from '../../../util/utils';
import useForm from '../useForm';

const LogIn = () => {

  const { state, dispatch } = useContext(UserContext);
  const [validLogin, setValidLogin] = useState(true);
  const [getSession, setGetSession] = useState(getCookie('session'));
  const { values, hanleChange, handleSubmit } = useForm('login', toLogin, validation);

  useEffect(() => {
    setValidLogin(state.userPassed)
    setCookie('session', state.userPassed, 2)

  }, [state.userPassed]);

  useEffect(() => {
    if (getSession) {
      location.replace('/main');
    }
  }, [getSession]);

  console.log('session', getCookie('session'));

  function toLogin() {
    dispatch(
      {
        type: 'LOG_IN',
        user: values
      }
    )
  }

  return (
    <div className='left-label-form login-form' id='retrieve-password-form' action='#0'>
      <input name='utf8' type='hidden' value='✓' />
      <input type='hidden' name='authenticity_token' value='fsafaxvdsfs1aegaad' />
      <div id='login-username' className='field'>
        <label htmlFor='login-username-field'>UserName/Email</label>
        <input type='text' name='username' value={values.username || ''} onChange={(e) => hanleChange(e)} id='login-username-field' required='required' />
      </div>
      <div id='login-password' className='field'>
        <label htmlFor='login-password-filed'>PassWord</label>
        <input type='password' name='password' onChange={(e) => hanleChange(e)} value={values.password || ''} id='login-password-field' required='required' />
        {
          !validLogin && (<div className={`error-message ${!validLogin && 'error-danger'}`}>The PassWord You Entered is Incorrect, Please Try Again.</div>)
        }
      </div>
      <div id='login-error'></div>
      <div>
        <label className='spacing-label'>&nbsp;</label>
        <button id='log-in-button' onClick={(e) => handleSubmit(e)} className='recaptcha-trigger-button button green action-button expand-right'>
          <span className='label'>Log in</span>
          <span className='spinner'></span>
        </button>
      </div>
    </div>
  );
}

export default LogIn;