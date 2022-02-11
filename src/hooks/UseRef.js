import React, { useEffect, useRef } from "react";

function UseRef(){

    const inputRef = useRef(null)

    useEffect(()=>{
        setTimeout(() => {
        inputRef.current.focus()
        }, 1000);
    }, [])

    return(
        <div>
            <input ref={inputRef} type='text'></input>
        </div>
    )
}

export default UseRef


// ----------------------------------------------------------------------------------- //

/* 
It is used to access DOM nodes directly within functional components.
*/