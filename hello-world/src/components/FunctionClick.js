import React from "react";

// Functional Component
function FunctionClick(){

    // In JavaScript we can define one function inside another function

    function clickHandler(){

        // this function is to handle the click function

        console.log("Button clicked")
        
        // we can see this message in the console of the browser
    }

    return (

        <div>
            <button onClick={clickHandler}> Click </button>
        </div>

    )

}

export default FunctionClick