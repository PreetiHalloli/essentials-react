import React from 'react'

function Propscomp(props) {
    return <div>
        <h3>The js languages are {props.language}</h3>
        <h5>The popular js library is {props.library}</h5>

    </div>

}

export default Propscomp

// -------------------------------------------------------------------------------------- //

/*
short form of properties.
it is optional input that componenet can accept.
when we want to pass properties from parent to child component or or only want to display data as it is(read only) 
or store as it is then use props.
props get passed to component.
it is immutable.
function comp - props
class comp - this.props

*/