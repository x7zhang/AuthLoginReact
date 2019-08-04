import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const initVal = {
    userlist: [
        {
            username: 'admin',
            password: 'test1234',
            email: 'admin@host.com',
            session: 'blahblah...'
        }
    ],
    userPassed: true
};

function userReduder(state, action) {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                ...{ userlist: state.userlist.concat(action.user) }
            }
        case 'LOG_IN':
            const targetUser = state.userlist.filter(user => (
                user.username === action.user.username && user.password === action.user.password)
            );
            if (targetUser.length > 0) {
                return {
                    ...state,
                    ...{ userPassed: targetUser[0].session }
                }
            }
            else {
                return {
                    ...state,
                    ...{ userPassed: false }
                }
            }


        default:
            return state;
    }
};

const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(userReduder, initVal);
    return <UserContext.Provider value={{ state, dispatch }}>{props.children}</UserContext.Provider>
};

const UserContextConsumer = UserContext.Consumer;

export {
    UserContext,
    UserContextConsumer,
    UserContextProvider
};