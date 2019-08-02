# AuthLoginReact
Authenticate Login SPA of React

Business Logic:

First time entry:
Redirect to Login Page
2 form in login page:
    Login | Signup  #dynamic change according to user requirement
    Signup:
        username
        email
        password
        re-password
    
    Login:
        username
        password
    
    Both:
        check if valid user input formation
    Signup:
        post user info to backend
        get session from backend, store in cookie
    Login:
        post user info to backend
        if success:
            get session from backend, store in cookie
            get user infor(user id, blah blah)
        if failure:
            popout alert to user
    
    
    

Re-entry(even just url change):
    check if have login-auth cookie
    check if login-auth cookie expired

    if get login-auth cookie:
        go to target page
    
    if we dont get cookie:
        re-direct to login-page
    
    Login:
        as same as above


User Sign-out:
    delete local login-auth cookie
    redirect to login page





func /component we need:

login page:

util:
    formate_valid() #check format, when user type in input
    blank_input()


#both check if any empty value in form. (blank_input())
_signUp()
_logIn()

:service
SignUP()
LogIn()

#post info to backend, get session, setup auth-login cookie.
set_cookie()

re-entry:
check_cookie()


