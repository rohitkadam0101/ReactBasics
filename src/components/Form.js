import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            comments:'',
            topic:'react'
        }
    }
    handleNameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (e) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault(); // to avoid auto refreshing of form
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type= 'text' value = {this.state.username} onChange={this.handleNameChange}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Form;