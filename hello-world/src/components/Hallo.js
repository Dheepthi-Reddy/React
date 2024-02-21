//a simple functional component that renders the returned html in the browser

import React from 'react'

const Hallo = () => {

    // using JSX

    // return(
    //     <div className = 'dummyClass'>
    //         <h1> Hello Dheepthi </h1>
    //     </div>
    // )

    // Without using JSX

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Dheepthi'))

    // It is clear that using JSX is much easier approach and easy to understand
}

export default Hallo