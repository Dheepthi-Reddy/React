import React, { Component } from 'react'

// ***Class Component***

class Message extends Component {

    // we initialize the state object in constructor
    constructor(){

        // super is used because we extend "React" component class
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing!"
        })
    }

    render(){
        
        return (

            <div>
                <h1>  {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}> Subscribe </button>
            </div>
        
        ) 

    }
}

export default Message