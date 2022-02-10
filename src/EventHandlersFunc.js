import React from 'react'

function EventHandlersFunc(){
    function clickHandlerWithClick(){
        console.log('Button clicked')
    }
    function clickHandler(){
        console.log('Button did not clicked')
    }

    return(
        <div>
            {/* here we pass the function as eventhandler, this is execute after click only */}
            <button onClick={clickHandlerWithClick}>click</button>

            {/* here we did function call, this is execute without click */}
            <button onClick={clickHandler()}>click</button>


        </div>
    )

}

export default EventHandlersFunc


// -------------------------------------------------------------------------------------- //

/*
Js class that extends component class from reactive libraray, they must contain render method which return HTml.

*/