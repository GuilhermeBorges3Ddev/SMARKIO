import React from 'react';
import './App.css';

//Importação dos componentes carregados dentro de App()
import Titulos from '../Componentes/Titulos';
import Formularios from '../Componentes/Formularios';
import ClimaInfo from '../Componentes/ClimaInfo';

const API_KEY = "81101292e91a941f627ea27ec02cf4bd";

class App extends React.Component{

  //Pegando as alterações nos dados de busca por busca, armazenamento em estados(states), inicialmente "undefined"
  state = {
    temperatura: undefined,
    cidade: undefined,
    pais: undefined,
    umidade: undefined,
    descricao: undefined,
    error: undefined
  }

  getData = async (e) => {
    
    e.preventDefault();//Previne que a requisição disparada não resete pelo reload do React
    
    const cidade = e.target.elements.cidade.value;
    const pais = e.target.elements.pais.value;
    const api_req = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${API_KEY}&units=metric`); 
    const data = await api_req.json();
    
    console.log(data);

    this.setState({
      temperatura: data.main.temp,
      cidade: data.name,
      pais: data.sys.country,
      umidade: data.main.humidity,
      descricao: data.weather[0].description,
      error: ""
    });

  }

  render(){
    return (
      <div className="App">
        <Titulos/>
        <Formularios getData={this.getData}/>
        <ClimaInfo
          temperatura={this.state.temperatura}
          cidade={this.state.cidade}
          pais={this.state.pais}
          umidade={this.state.umidade}
          descricao={this.state.descricao}
          error={this.state.error}
        />
      </div>
    );
  }

}

export default App;
