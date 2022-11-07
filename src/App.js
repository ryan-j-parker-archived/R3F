import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Torus from './Torus';
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Canvas>
        <Box />
        <Torus position-x={-10} />
      </Canvas>
    </div>
  );
}

export default App;
