import React, { useState, useMemo } from "react";

function UseMemo(){

    const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

//   this executes only when counterOne changes.
// Also useMemo used cached value from previous render.

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

//   const isEven = () =>{
//     let i = 0
//     while (i < 2000000000) i++
//     return counterOne % 2 === 0
//   }

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}

			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default UseMemo

// -------------------------------------------------------------------- //

/* 
It is used for performance optimization

If you need to cache funtion then use callback
If you nned to cache result use useMemo
*/