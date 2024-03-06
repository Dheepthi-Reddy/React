import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import MyComponent from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hallo'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Greet></Greet> */}
      {/* or <Greet/> */} 

      {/* ******prop names - we can have any number of prop names****** */}
      {/* <Greet  name = "Bruce" heroName = "Batman">
        
        <p> This is children props </p>
      
      </Greet> 

      <Greet  name = "Clark" heroName = "Superman">
        
        <button> ACTION </button>
      
      </Greet>

      <Greet  name = "Diana" heroName = "Wonder women" />  */}

      {/* *****props using class components***** */}

      {/* <Welcome name = "Bruce" heroName = "Batman" />
      <Welcome name = "Clark" heroName = "Superman"/>
      <Welcome name = "Diana" heroName = "Wonder women"/> */}

      {/* <MyComponent/>
      <Welcome/> */}

      {/* <Hello/> */}

      {/* <Message/> */}

      <Greet  name = "Bruce" heroName = "Batman"></Greet>
      <Welcome name = "Diana" heroName = "Wonder women"/>


    </div>
  );
}

export default App;
