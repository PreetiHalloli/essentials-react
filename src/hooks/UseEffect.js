import React, { useEffect, useState } from "react";

function UseEffect(){

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `you clicked ${count} thimes`
    })

    return(
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default UseEffect


// ----------------------------------------------------------------------------------- //

/* 
In class comp to render data we need to write same code in multiple lifecycle of class comp
eg - to get list data we nedd to write code in ComponenetDidMount and ComponenetDidUpdate lifecycle 
for initial level execution and for after updation respectfully.
also
single functionality;s code we have to write in defferent different lifecycle 
eg - setTimeinterval in ComponenetDidMount and clearInterval in ComponenetWillUnmount. (functinality of timer)

so useEffect is close replacement for ComponenetDidMount, ComponenetDidUpdate, ComponenetWillUnmount.
mainly used for updating, api call
UseEffect runs after every render of component.

*/