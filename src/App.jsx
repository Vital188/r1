
import './App.css';
import Bebras from './Components/009/Bebras';
import Lape from './Components/009/Lape';
import Black from './Components/009/Black';
import White from './Components/009/White';
import rand from './Funkcijos/rand';

// const cats = [
//     {name: 'Puikis', color: 'gray'},
//     {name: 'Ufo', color: 'yellow'},
//     {name: 'Pukis', color: 'white'}
// ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Lape></Lape>
       <Bebras></Bebras> 
        <h1>JS</h1> 
        <Bebras></Bebras>
        { rand(0,1) ? <Black/> : <White/>} 
        
      

      {/* <div className='cat' style={{backgroundColor: cats[0].color }}><span>{cats[0].name}</span></div>
     <div className='cat' style={{backgroundColor: cats[1].color }}><span>{cats[1].name}</span></div>
     <div className='cat' style={{backgroundColor: cats[2].color }}><span>{cats[2].name}</span></div> */}



 {/* {     cats.map((cat, i) => <div key={i} className='cat' style={{backgroundColor: cat.color }}>
      <span>{cat.name}</span>
      </div>)} */}

      </header>
    </div>
  ); 
}

export default App;
