function signupValid(val) {
  let errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (val.email === '') {
    errors.email = 'Email is required.';
  }
  if (val.username === '') {
    errors.username = 'Username is required.';
  }
  if (val.password === '') {
    errors.password = 'Password is required.';
  }

  if (!re.test(val.email)) {
    errors.email = 'Email address is invalid'
  }

  if (val.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
}


function validation(type, val) {
  console.log('validation callback runnnnn');
  console.log("val", val);
  if (type === 'signup') {
    return signupValid(val);
  }
  if (type === 'login') {
    return {};
  }


};

function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  let cookieName = `${name}=`;
  let cookieArray = document.cookie.split(';');

  for (let cookie of cookieArray) {
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
}

function mimicBackEndUserChecking(user) {
  console.log('user', user);
}



export { validation, setCookie, getCookie, mimicBackEndUserChecking }