import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      //since we are using "this" keyword, we do binding in the constructor
      this.greetParent = this.greetParent.bind(this)
      
    }

    greetParent(childName) {

        // This is regular concatenation
        // alert('Hello', + this.state.parentName)

        //since we are using ES6 we can use back ticks
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }
    
  render() {
    return (
      <div>

        {/* we add an attribute to the child component: greetHandler */}
        {/* to that we assign greet parent method */}
        <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
