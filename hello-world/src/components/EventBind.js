import React, { Component } from 'react'

// :snippet - shortcuts:
// rce - ReactClassExportComponent : create a skeleton class component
// rconst - ClassConstructor : constructor of the class component


class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello Dheep'
      }

      {/* Method-3: Binding in the constructor */}
    //   this.clickHandler = this.clickHandler.bind(this)
      
    }
    
    // Use this for Methods-1,2,3 of binding
    // clickHandler(){

    //     this.setState ({
    //         message: 'Good Morning!'
    //     })
    //     console.log(this)

    // }

    /* Method-4: Arrow function as a class property */
    clickHandler = () => {

        this.setState({

            message: "Good Morning!"

        })

    }


  render() {
    return (
      <div>

        <div> {this.state.message} </div>
        
        {/* Method-1: Binding in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}

        {/* Method-2: Using arrow functions in render method */}
        {/* <button onClick={() => this.clickHandler()}> Click </button> */}

        <button onClick={this.clickHandler}> Click </button>

      </div>
    )
  }
}

export default EventBind
