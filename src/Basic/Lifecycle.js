import React from 'react'

class Lifecycle extends React.Component{
    render(){
        return 
    }
}

export default Lifecycle


// -------------------------------------------------------------------------------------- //

/*
Lifecycle methods are available for class component not exist on functinal componenet.
4 types
1 - Mounting
when an instance of comp is being created and insterted into DOM.
methods - constructor, render, componenetDidMount,

2 - Updating
when component is being re-rendered as a result of changes to either it's props or state.
methods - render, componentDidUpdate, shouldComponentUpdate, getSnapshotBeforeUpdate, static getDerivedStateFromProps

3 - Unmounting
when component is being removed from DOM 
methods - componentWillUnmount

4 - Error handling 
when there is an error during rendering , in lifecycle method or constructor or any child comp.
methods - componenetDidCatch, getDerivedStateFromError

Component lifecycle ->
componenetwillMount - Immediately before initial rendering
componenetdidMount - Immediately after initial rendering
componentWillrecieveProps - when coponents recivesnew props
should componentUpdate - before rendering, after receiving new props or state
componentWillUpdate - before rendering, after recieving new props or state
conponent DidUpdate - after component's updates are flushed to DOM
componentWillUnmount - Immediately before removing component from DOM

*/