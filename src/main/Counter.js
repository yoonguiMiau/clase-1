import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './css/counter.css';

function Counter({datos}) {
  console.log(datos);
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };
  
  return (
    <div className="counter-container">
<Button variant="outline-warning" onClick={incrementarContador}>
  <h3 className='bt1' >Click</h3>
</Button>
{datos.map((datos, index)=> {
  return(
    <div key={index}>
    
    <h1 className="dato" >{datos}</h1>

    </div>
  );
})}
    <h2 className="contador">Contador: {contador}</h2>
    </div>
  )
}

export default Counter