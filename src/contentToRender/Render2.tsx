import React from 'react';
const App = ({allow3}:any) => {
    React.useEffect(()=>{console.log('usando useEffect hook2');allow3()},[])
    return( <div style={{backgroundColor: 'orange', color: 'white'}}>Render 2</div>)}; 

export default App