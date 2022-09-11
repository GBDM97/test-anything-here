import './App.css';
import React from 'react';
import { Suspense } from 'react';
import R1 from './contentToRender/Render1'
import R2 from './contentToRender/Render2'
import R3 from './contentToRender/Render3'


function App() {

// const R1 = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 1000)).then(
//     () =>
//       import("./contentToRender/Render1")

//   );
// });
// const R2 = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 2000)).then(
//     () =>
//       import("./contentToRender/Render2")
//   );
// });
// const R3 = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 2000)).then(
//     () =>
//       import("./contentToRender/Render3")
//   );
// });
const [c2, set2] = React.useState(false);
const allow2 = () => {setTimeout(sett2,3000)}
const sett2 = () => {set2(true)}
const [c3, set3] = React.useState(false);
const allow3 = () => {setTimeout(sett3,6000)}
const sett3 = () => {set3(true)}


return(
    <>
    {/* <Suspense fallback={<div>Loading mano...</div>}> */}
      <R1 allow2={allow2}/>
    {/* </Suspense> */}
    {/* <Suspense fallback={<div>Loading mano...</div>}> */}
      <R2 c2={c2} allow3={allow3}/>
    {/* </Suspense> */}
    {/* <Suspense fallback={<div>Loading mano...</div>}> */}
      <R3 c3={c3}/>
    {/* </Suspense> */}
    </>
 )
}

export default App;
