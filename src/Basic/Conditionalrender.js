import React from 'react'

class Conditionalrender extends React.Component{
    constructor(){
        super()
        this.state = {
            isloggedin: true
        }
    }

    render(){

        /* ---if-else---- */
       let message
       if(this.state.isloggedin){
           message=<p>Welcome Preeti</p>
       }else{
        message=<p>Welcome User</p>
       }
       return <div>{message}</div>

       /* ---ternary conditinal operator---- */
    //    return(
    //        this.state.isloggedin ?
    //        <p>Welcome Preeti</p> :
    //        <p>Welcome User</p>
    //    )l

       /* ---ternary conditinal operator---- */
    //    return this.state.isloggedin && <p>Welcome</p>

    }
}

export default Conditionalrender

// -------------------------------------------------------------------------------------- //

/*
Js class that extends component class from reactive libraray, they must contain render method which return HTml.

*/