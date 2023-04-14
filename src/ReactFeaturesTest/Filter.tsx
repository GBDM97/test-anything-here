import React from 'react'; 
const App = () => {

    interface data {
        firstEl: string;
        secondEl: string;
        thirdEl: string;
        fourthEl: string;
    }
    const data = {
        firstEl: "first",
        secondEl: "second",
        thirdEl: "third",
        fourthEl: "fourth"
    }
    const out = Object.keys(data).filter((i) => i === "firstEl" || i == "fifthEl" );
    const par = () => {out.map((item)=>{return console.log(item)})};

    //the line of code above returns to const out the object keys of data that are not of the name of first and secEl.

    return(
    <>
        <button onClick={par}>{data["fourthEl"]}</button>
    </>
    )}; 
export default App