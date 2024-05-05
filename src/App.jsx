import './App.css'
import Card from './components/Card';
import vehicles from './data/vehicles'; 

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} descripcion={v.description} image = {v.image} />
  });

  return <div className='App'>
    <h1>Clases de vehiculos</h1>
    <div className='container'>
      {vehicleList}
    </div>
  </div>
}

export default App
