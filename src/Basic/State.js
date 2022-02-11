import React from 'react'

class Statecomp extends React.Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor...'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for visiting...'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Statecomp


// -------------------------------------------------------------------------------------- //

/*
State is an object that is privately maintained inside component.
state is obj of component.
when we want to manipulate data then use the state.
state can be changed.
function component - useState hook
class comp - this.state

Don't modify state directly because react will not render the component, for that use setState.

setState are asynchronous
it has 2 parameters 
1. state object.
2. callback function.

whenever you need to execute some code after state has been changed, do not place that code right after setState method,
place it within callback function of second parameter.
eg.
increment(){
    this.setState({
        count: this.state.count + 1},
        ()=>{log('callback value', this.state.count)}
    })
}

when you have to update state based on previous state make sure to pass in function as an argument instead of regular object.
increment(){
    this.setState((prevState, props)=>({
        count: this.state.count + 1}),
        ()=>{log('callback value', this.state.count)}
    })
}


*/