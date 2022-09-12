import React from 'react';

const App = ({allow2}:any) => {
    
    React.useEffect(()=>{console.log('usando useEffect hook1'); allow2()},[])
    return(
    
    <div style={{backgroundColor: 'deepskyblue', color: 'white'}}>Render 1</div>
)}; 

export default App