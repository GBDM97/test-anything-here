import './App.css';
import React from 'react';
import { Suspense } from 'react';

function App() {

const [sts, set] = React.useState('Not Loaded');

const Name = React.lazy<any>(() => import("./nasa1"));

  return (
    <Suspense fallback={<div>Loading mano...</div>}>
      <Name/>
    </Suspense>
  );
}

export default App;
