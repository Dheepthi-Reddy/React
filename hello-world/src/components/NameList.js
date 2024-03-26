import React from 'react'
import Person from './Person'

function NameList() {

//  ***First way

//     const names = ['Bruce', 'Clark', 'Diana']     
    

//   return (
//     <div>
//       {/* <h2> {names[0]} </h2>
//       <h2> {names[1]} </h2>
//       <h2> {names[2]} </h2> */}

//       {
//         names.map(name => <h2> {name} </h2>)   
//       }


//     </div>
//   )

// ***Second way: using a list

//   const names = ['Bruce', 'Clark', 'Diana']
//   const nameList = names.map(name => <h2> {name} </h2>)   //(2)

//   return(
//     <div> {nameList} </div>
//   )

// ***Third way

// const persons = [
//     {
//         id: 1,
//         name: 'Bruce',
//         age: 30,
//         skill: 'React'
//     },
//     {
//         id: 2,
//         name: 'Clark',
//         age: 25,
//         skill: 'Angular'
//     },
//     {
//         id: 3,
//         name: 'Diana',
//         age: 28,
//         skill: 'Vue'
//     }
// ]

// const personList = persons.map(person => (

// <h2> 
//     I am {person.name}. I am {person.age} years old. I know {person.skill}
// </h2>

// ))

// return <div> {personList} </div>


// ***Fourth way: passing as a JSX component with the help of props

const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
    }
]

const personList = persons.map(person => <Person person = {person}/>)   //creating a prop of person

return <div> {personList} </div>

}

export default NameList
