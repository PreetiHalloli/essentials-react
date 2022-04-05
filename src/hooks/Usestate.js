import React, { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    const addCount = ()=>{
        setCount(count + 1)
        console.log("preeti",count)
    }

    return(
        <div>
            <button onClick={addCount}>Count {count}</button>
        </div>
    )
}

export default Counter



// -------------------------------------------------------------------------------------------- //

/* 
We call it inside a function component to add some local state to it. 
React will preserve this state between re-renders
useState() function or hook accepts an argumanet which is initial value of stste property and 
returns current value of state property and method that is capable of updating state property.


The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]



*/