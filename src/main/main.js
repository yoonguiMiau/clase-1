import Counter from './Counter';
import img from './img/tite.jpg';
import css from './css/main.css';
function Main() {
    console.log('Bienvenido Grupo 5A')
  return (
    <div className="main-container">
        
        <Counter datos={['Karina', '20961', '5A']}/>
        <img src={img}  className="main-image" alt="Tite Image"/>

    </div>
  )
}

export default Main