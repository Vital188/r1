<<<<<<< HEAD
import './App.scss';
import Squares from './Components/017/Squares';
// import Text from './Components/017/Text';
// import { useState } from "react";
// import Show from './Components/017/Show';
// import Cb from './Components/017/Cb';

function App() {

    // const [showText, setShowText] = useState('');
    // const [color, setColor] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                {/* <div className="dog-bin">
                    <div className="dog" style={{backgroundColor: color ? 'crimson' : 'black'}}></div>
                </div> */}
                <h1>State Uplifting AND useRef</h1>
                {/* <Text setShowText={setShowText} />
                <Show showText={showText} />
                <Cb setColor={setColor} /> */}
                <Squares />
            </header>
        </div>
    );
=======
import "./App.scss";
import Jokes from "./Components/Jokes";

function App() {



  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ten best jokes</h1>
        <Jokes color='red'></Jokes>
      </header>
    </div>
  );
>>>>>>> f5f0667acec1b33af31a52fe7aa89bd880ab8cf4
}

export default App;
