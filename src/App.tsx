import './App.css';
import React from 'react';
import nasa from './Media/nasa1.jpeg'
import { resolve } from 'node:path/win32';

function App() {

const [sts, set] = React.useState('Not Loaded');

const load = () => {
  set('Loading...')
  new Promise(resolve => setTimeout(resolve, 2000))
  .then(()=>set('Loaded'))
}

  return (
      <button onClick={load} style={{backgroundColor: 'lime'}}>{sts}</button>
  );
}

export default App;
