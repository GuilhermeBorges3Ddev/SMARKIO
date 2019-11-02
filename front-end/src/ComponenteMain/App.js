import React from 'react';
import './App.css';

//Importação dos componentes carregados dentro de App()
import Titulos from '../Componentes/Titulos';
import Formularios from '../Componentes/Formularios';
import ClimaInfo from '../Componentes/ClimaInfo';

const API_KEY = "81101292e91a941f627ea27ec02cf4bd";

class App extends React.Component{

  getData = async (e) => {
    e.preventDefault();//Previne que a requisição disparada não resete pelo reload do React
    const api_req = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Washington,us&appid=${API_KEY}&units=metric`); 
    const data = await api_req.json();
    console.log(data);
  }

  render(){
    return (
      <div className="App">
        <Titulos/>
        <Formularios getData={this.getData}/>
        <ClimaInfo/>
      </div>
    );
  }

}

export default App;
