import './App.scss';
import Square from './Components/024/Square';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SECOND TASK</h1>
        {/* <Square color={'pink'}></Square> */}
        <button onClick={e => console.log('%c bam',  'color: #55abda')}>BAM</button>

      </header>
    </div>
  );
}

export default App;