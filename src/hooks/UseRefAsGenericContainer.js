import React, { useEffect, useRef, useState } from "react";

function UseRefAsGenericContainer(){

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)

        return() =>{
            clearInterval(intervalRef.current)
        }
        
    }, [])

    return(
        <div>
            Hook timer - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default UseRefAsGenericContainer


// ----------------------------------------------------------------------------------- //

/* 
UseRef as used as generic container as well.
If suppose we have one variable inside one function and that variable we want to use outside 
of the function, which not works due to scope.
so that time we can create a ref using UseRef which is worked as generic container.
*/