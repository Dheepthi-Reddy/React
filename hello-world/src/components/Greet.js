import React from 'react'

// ***Functional Component***
// function Greet(){
//     return <h1>Hello Dheepthi</h1>
// }

// const Greet = () => <h1>Hello Dheepthi Reddy</h1>

// calling props
const Greet = props => {
    console.log(props)
    return <div>
        
        <h1>Calling Props: {props.name} - AKA - {props.heroName}</h1>
        {props.children}
    </div>
}

export default Greet