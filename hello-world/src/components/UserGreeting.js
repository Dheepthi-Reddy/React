import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {

    // Approach-1: Using regular if-else and return statements

    // if (this.state.isLoggedIn) {
    //     return <div>    Welcome Dheepthi   </div> 
    // } else {
    //     return <div>    Welcome Guest   </div> 
    // }

    // Approach-2: Using a variable to call the div tags
    // let message

    // if(this.state.isLoggedIn) {
    //     message = <div>    Welcome Dheepthi   </div>
    // } else {
    //     message = <div>    Welcome Guest   </div> 
    // }

    // return message

    // Approach-3: Using Ternary operator
    // return(

    //     this.state.isLoggedIn ?
    //     (<div>    Welcome Dheepthi   </div>) :
    //    ( <div>    Welcome Guest   </div>)
    // )

    // Approach-4: Short-circuit operator(it is a special case of ternary operator)
    // if we want to display nothing when the isLoggedIn is false we can use this operator
    return this.state.isLoggedIn && <div>    Welcome Dheepthi   </div>

    // Basic class structure

    // return (
    //     <div>
    //         <div>    Welcome Dheepthi   </div>
    //         <div>    Welcome Guest   </div>
    //     </div>
    // )
  }
}

export default UserGreeting
