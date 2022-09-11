import React from 'react';
const App = ({c2, allow3}:any) => {
    React.useEffect(()=>{console.log('usando useEffect hook2');allow3()})
    return( <>{ c2 ? <div style={{backgroundColor: 'orange', color: 'white'}}>Render 2</div>: null} </>
)}; 

export default App