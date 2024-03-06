import React, { Component } from 'react'

// ***Class Component***

// class Welcome extends Component {
//     render(){
//         // return <h1>Class Component</h1>

//         // unline functional components we access props using "this" keyword

//         return <h1> Welcome {this.props.name} AKA {this.props.heroName} </h1>

//     }
// }

// export default Welcome

// destructuring in class component
class Welcome extends Component {

    
    render(){

        const {name, heroName} = this.props     //for props
        // const {state1, state2} = this.state  //for state
        
        return (
        <h1>
             Welcome {name} AKA {heroName}
        </h1>
        )

    }
}

export default Welcome