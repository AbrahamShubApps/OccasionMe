import React from 'react';
// import { signup } from '../util/session_util';
import './App.css';

const App = props => {
  fetch('/api/events').then(res => res.body).then(res => console.log(res))
  // signup('username@whatever.com', 'mypassword')
  //   .then(res => console.log(res));
  return (
    <div>
      App goes here!!!
    </div>
  )
}

export default App;
