import './App.css';
import React from 'react';
import { Suspense } from 'react';

function App() {

const R1 = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () =>
      import("./contentToRender/Render1")
  );
});
const R2 = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 2000)).then(
    () =>
      import("./contentToRender/Render2")
  );
});
const R3 = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () =>
      import("./contentToRender/Render3")
  );
});

  return (
    <>
    <Suspense fallback={<div>Loading mano...</div>}>
      <R1/>
    </Suspense>
    <Suspense fallback={<div>Loading mano...</div>}>
      <R2/>
    </Suspense>
    <Suspense fallback={<div>Loading mano...</div>}>
      <R3/>
    </Suspense>
    
    </>
  );
}

export default App;
