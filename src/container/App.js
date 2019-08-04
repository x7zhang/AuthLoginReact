import React from 'react';

import AccessBundle from '../component/AccessBundle/index';


function App() {
  return (
    <div className='auth-login'>
      <AccessBundle target={'signup'} />
    </div>
  );
}

export default App;