import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import MyComponent from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* or <Greet/> */}
      <MyComponent/>
      <Welcome/>
    </div>
  );
}

export default App;
