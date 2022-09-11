import React from 'react';
const App = ({c3}:any) => {
    React.useEffect(()=>{console.log('usando useEffect hook3')})
    return(<>{ c3 ?<div style={{backgroundColor: 'green', color: 'white'}}>Render 3</div> : null}</>
)}; 

export default App