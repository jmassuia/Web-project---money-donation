import React from 'react';
import Routes from './routes'
import './Global.css';
import 'mdbreact/dist/css/mdb.css';
function App() {
  //Componentes que devem estar presentes em toda as paginas deveram ser colocados aqui
  return (
    <div>
      <Routes/>
    </div>

  );
}

export default App;
