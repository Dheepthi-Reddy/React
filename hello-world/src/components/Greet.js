import React from 'react'

// ***Functional Component***
// function Greet(){
//     return <h1>Hello Dheepthi</h1>
// }

// const Greet = () => <h1>Hello Dheepthi Reddy</h1>

// calling props
// const Greet = props => {
//     console.log(props)
//     return <div>
        
//         <h1>Calling Props: {props.name} - AKA - {props.heroName}</h1>
//         {props.children}
//     </div>
// }

// export default Greet

// Destructuring props in functional components:

// 1st way destructuring in the parameter
// const Greet = ({name, heroName}) => {     //destructuring
    
//     return (
//     <div>
        
//         <h1>Calling Props: {name} - AKA - {heroName}</h1>
        
//     </div>
//     )
// }

// export default Greet

// 2st way destructuring in function body
const Greet = props => {     //destructuring
    const {name, heroName} = props
    return (
    <div>
        
        <h1>Calling Props: {name} - AKA - {heroName}</h1>
        
    </div>
    )
}

export default Greet