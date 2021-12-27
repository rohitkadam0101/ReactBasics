import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        
        this.state = {
            message:"Welcome Visitor"
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     this.setState({
    //         message:"Thanks for subscribing"
    //     })
    // }
    // As an arrow function
    changeMessage= ()=>{
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={()=>this.changeMessage()}>Subscribe</button> //Using arrow function */}
                {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button> // Using bind method  */}
                <button onClick={this.changeMessage}>Click Here!</button> 
                {/* // binding inside constructor -> most used less performance issues */}
            </div>
        )
    }
}
export default Message;