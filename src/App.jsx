import './App.css';
import Square from './Components/010/squere';
import Bin from './Components/010/bin';

 const squares = [
     {color: 'black', name: 'Valio', size: 88, show: true},
    {color: 'white', name: 'hik', size: 28, show: true},
     {color: 'red', name: 'gris', size: 100, show: true},
    {color: 'blue', name: 'karlius', size: 120, show: true},
 ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    
        <h1>Props</h1> 

    <Bin color="crimson" size ={100} />

    {
    squares.filter( sq => sq.size < 200 ).map((s, i) => <Square key={i} color = {s.color} name={s.name} size = {s.size} show = {s.show} />)
}


    {/* /* // [...squares].sort( (a, b) => b.size - a.size ).map((s, i) => <Square key={i} color = {s.color} name={s.name} size = {s.size} show = {s.show} />) */}


 
   </header>
    </div>
  ); 
}

export default App;
