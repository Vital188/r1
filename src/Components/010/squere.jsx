import rand from "../../Funkcijos/rand";
import randColor from "../../Funkcijos/randcolor";

function Square ({color, size, name, show}) {

    if (!show) {
        return null;
    }

return (

    <div  className='cat App-logo' style={{
    backgroundColor: size > 300 ? randColor() : color, 
    width: rand(100,200) + 'px',
    height: size + 'px' }}>
    <span>{name}</span>
    </div>


)




}

export default Square;