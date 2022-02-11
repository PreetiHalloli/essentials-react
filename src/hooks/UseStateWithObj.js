import React, { useState } from "react";

function UseStateWithObj(){

    const [name, setName] = useState({firstName: '', lastName: ''})

    return(
        <form>
            {/* <input type='text' value={name.firstName} onChange={e => setName({firstName: e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={e => setName({lastName: e.target.value})}></input> */}

{/* useState function deos not automatically merge and update objectes,
so using spread operator we have to merge it manually. */}
            
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}

export default UseStateWithObj

// -------------------------------------------------------------------------------------- //

/* 
useState function deos not automatically merge and update objectes,
so using spread operator we have to merge it manually.

*/