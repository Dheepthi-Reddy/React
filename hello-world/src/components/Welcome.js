import React, { Component } from 'react'

// ***Class Component***

class Welcome extends Component {
    render(){
        // return <h1>Class Component</h1>

        // unline functional components we access props using "this" keyword

        return <h1> Welcome {this.props.name} AKA {this.props.heroName} </h1>

    }
}

export default Welcome