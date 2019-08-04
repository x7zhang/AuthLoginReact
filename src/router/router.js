import React from 'react';
import { Router } from '@reach/router';

import AccessBundle from '../component/AccessBundle/index';
import MainPage from '../component/MainPage/index';

function AuthRouter() {
    return (
        <Router>
            <AccessBundle target={'signup'} path="/" />
            <MainPage path="/main" />
        </Router>
    )
};

export default AuthRouter;