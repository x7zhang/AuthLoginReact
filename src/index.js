import React from 'react';
import ReactDOM from 'react-dom';

import { UserContextProvider } from './context/UserContext';
import AuthRouter from './router/router';


ReactDOM.render(
    <UserContextProvider>
        <AuthRouter />
    </UserContextProvider>,
    document.getElementById('root')
);
