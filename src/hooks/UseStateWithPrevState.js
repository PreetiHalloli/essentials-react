import React, { useState } from "react";

function UseStateWithPrevState(){

    const initialCount = 0;
    const [count, setCount] = useState(0)

    const incrementByFive = ()=>{
        debugger
        for (let i = 0; i < 5; i++) {
            debugger
            setCount(prev => prev + 1)
            console.log("data")
        }
    }

    const decrementByTwo = ()=>{
        for (let i = 0; i < 2; i++) {
            setCount(prev => prev - 1) 
        }
    }

    return(
        <div>
            Count - {count}
            <button onClick={()=>{setCount(initialCount)}}>Reset</button>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
            <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
            {/* or<button onClick={()=>{setCount(prev => prev - 1)}}>Decrement</button> */}
            <button onClick={incrementByFive}>Increment by 5</button>
            <button onClick={decrementByTwo}>Decrement by 2</button>

        </div>
    )
}

export default UseStateWithPrevState