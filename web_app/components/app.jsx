import React from 'react';
import { signup } from '../util/session_util';

const App = props => {
  signup('username@whatever.com', 'mypassword')
    .then(res => console.log(res));
  return (
    <div>
      App goes here!!!
    </div>
  )
}

export default App;
