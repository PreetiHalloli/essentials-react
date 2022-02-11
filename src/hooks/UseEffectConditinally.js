import React, { useEffect, useState } from "react";

function UseEffectConditinally(){

    // Run effect only once
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const logMousepostion = (e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousepostion)
    }, []) 

    // ----------------------------------------- //

    

    // second parameter is used to condionally render when count will change then only it will run UseEffect
    // If present, effect will only activate if the values in the list change.
    // useEffect(()=>{
    //     console.log("useEffect called")
    //     document.title =  `you clicked ${count} thimes`
    // }, [count])

    return(
        <div>
            Hooks X- {x} and Y - {y}
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={()=>{setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default UseEffectConditinally

// ----------------------------------------------------------------------------------- //

/*  
In somecasese applying effect after every render might create performance problem.
so we need a way to conditionally run an effect.
*/