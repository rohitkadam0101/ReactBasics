import React,{Component} from 'react';

class welcome extends Component{
    render(){
        // const {name,role} =this.props; for directly naming instead of this.props.name
        // const{state1,state2} = this.state
        return(
            <div>
                <h1>This is class component</h1>
                <h1>Your name is {this.props.name}</h1>
            </div>
        )
    }
}
export default welcome;