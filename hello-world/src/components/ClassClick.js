import React, { Component } from 'react'


// Class Component
class ClassClick extends Component {

    clickHnadler(){

        console.log("Clicked the Button")

    }

  render() {
    return (
      <div>

        {/* In class component methods are handled "using" this keyword */}
        <button onClick={this.clickHnadler}> Click Me </button>
      </div>
    )
  }
}

export default ClassClick
