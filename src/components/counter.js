import React, { Component } from 'react';

// Dos and Donts
// 1)Always make use of setState and never modify code directly
// 2)place code after setState in callback function of setState
// 3)to update state based on previous state pass function as a parameter inside setState instead of object
class counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }

    }
    increment(){
        // this.setState({
        //     count:this.state.count + 1
        // },()=>console.log(this.state.count)) // Always use callback method if we want to execute anything after setState
        this.setState(prevState=>({
            count:prevState.count + 1
        }))
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default counter