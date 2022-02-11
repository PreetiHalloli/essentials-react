import React, { useState } from "react";

function UseCallback(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Count {count}</button>
        </div>
    )
}

export default UseCallback

// -------------------------------------------------------------------- //

/* 
It is used for performance optimization
useCallback is a hook that will return a memorised versionof callback function
that only changes if one of the dependencies has changed.
It prevents unnecessary renders.

If you need to cache funtion then use callback
If you nned to cache result use useMemo
*/