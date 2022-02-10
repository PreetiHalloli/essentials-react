import React from 'react'

class EventHandlersComp extends React.Component{

    clickHandler(){
        console.log('clicked button')
    }

    render(){
        return <div>
             {/* bind in render method */}
            <button onClick={this.clickHandler}>click me</button>            
        </div>
    }
}

export default EventHandlersComp


// -------------------------------------------------------------------------------------- //
