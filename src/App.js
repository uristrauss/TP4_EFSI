import './App.css';
import Formulario from './Formulario.js';

function App() {

  const sacoLaDataDelFomulario =(data) =>{
    console.log (data);
  };

  return (
    <div className="App">
      <Formulario onAgregarTarjeta={sacoLaDataDelFomulario}/>
    </div>
  );
}

export default App;
