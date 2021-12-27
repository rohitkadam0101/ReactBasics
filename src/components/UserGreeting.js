import React, { Component } from 'react';
class UserGreeting extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        // Ternary Operator
        return(
            this.state.isLoggedIn?
            <div>Welcome Daito</div>:
            <div>Welcome Guest</div>
        )
        // return (this.state.isLoggedIn && <div>Welcome Daito</div>)
        // Conditional Rendering
        // Method 1: if-else
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Daito</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome guest</div>
        //     )
        // }
        // Method 2-> Using Variable
        let message = <div>Welcome Guest</div>
        if(this.state.isLoggedIn){
            message = <div>Welcome Rohit</div>
        }
        return(
            <div>{message}</div>
        )
        // return(
        //     <div>
        //         {/* IF logged in then Hello Rohit, if not loggedIn then Welcome guest*/}
        //         <h1>Hello Rohit</h1>
        //         <h2>Welcome Guest</h2>
        //     </div>
        // )
    }
}
export default UserGreeting