import React from 'react';
const App = () => {
    React.useEffect(()=>{console.log('usando useEffect hook3')},[])
    return(<div style={{backgroundColor: 'green', color: 'white'}}>Render 3</div>)}; 

export default App