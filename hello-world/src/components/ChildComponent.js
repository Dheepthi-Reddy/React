import React from 'react'

function ChildComponent(props) {
  return (
    <div>

        {/* here we are passing the method as props to child component */}
      {/* <button onClick={props.greetHandler}> Greet Parent </button> */}
      {/* when we use this above method we don't put parameters in the parent class greet handler method */}

      {/* passing a parameter when calling a parent method from the child component */}
      {/* now we can pass any number of parameters to the greet handler */}
      <button onClick={() => props.greetHandler('child')}> Greet Parent </button>

    </div>
  )
}

export default ChildComponent
