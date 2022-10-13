import React from 'react'; 

const App = () => {
const [current, set] = React.useState(0);
const more = () => {
    let c = current
    set(c + 1)
}

const less = () => {
    let c = current
    set(c - 1)
}

return(

<>
    <button onClick={more}>&#8593;</button>
    <p>{current}</p>
    <button onClick={less}>&#8595;</button>
</>

)}; 

export default App