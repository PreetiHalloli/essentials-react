import React, { useEffect, useState } from "react";

function UseEffectCleanup(){

    // Run effect only once
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousepostion = (e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousepostion)

        // cleanup code
        return() =>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousepostion)
        }
    }, []) 

    return(
        <div>
            Hooks X- {x} and Y - {y}
        </div>
    )
}

export default UseEffectCleanup

// ----------------------------------------------------------------------------------- //

/*  
To unmount componenet functinality.
In short to cancel all your subscription and listener to avoid memory leakage.
when you want to execute some componenet cleanup code you include it in a function and return 
that function from function passed to use effect

*/