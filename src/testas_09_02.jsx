
import './App.scss';
import Squares from './Components/017/Squares';
import Jokes from './Components/testas_09_02/Jokes'
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
            <h1>Ten best jokes</h1>
            <Jokes color='red'></Jokes>
          </header>
        </div>
      );
    }
    
    export default App;


