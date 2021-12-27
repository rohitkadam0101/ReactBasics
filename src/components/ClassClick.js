import React, { Component } from 'react';

class ClassClick extends Component{
    clickHandler(){
        console.log("Clicked inside class component")
    }
    render(){
        return(
            <button onClick={this.clickHandler}>Class Handler</button>
        )
    }
}
export default ClassClick;