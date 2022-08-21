import rand from "../../Funkcijos/rand";


function Bebras () {

const ka  = rand(0,1);

return (

<>
     <h2 style = {{color: 'red' }}>Baziniai dalykai {2*2}: {ka ? 'ismokti' : 'pakartuoti'} </h2>
     <span style ={{
        backgroundColor: 'white',
        color: rand(0,1) ? 'green' : 'blue',
        fontSize: '20px',
        fontStyle: 'italic'
                     }}> Et minimum to maximum</span>
</>

     )
}


export default Bebras;

