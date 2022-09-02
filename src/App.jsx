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
}

export default App;
