import React from 'react';

class ClimaInfo extends React.Component {
  render(){
    return (
      <div>
        {this.props.temperatura && 
          <p>Cidade pesquisada: {this.props.cidade}</p>
        }

        {this.props.pais && 
          <p>Sigla do país da cidade buscada: {this.props.pais}</p>
        }
        
        {this.props.temperatura && 
          <p>Temperatura: { this.props.temperatura }º</p>
        }
        
        {this.props.umidade && 
          <p>Umidade: {this.props.umidade}%</p>
        }
        
        {this.props.descricao && 
          <p>Condições: { this.props.descricao }</p>
        }

        {this.props.latitude &&
          <p>Latitude: { this.props.latitude }</p>
        }

        {this.props.longitude &&
          <p>Longitude: { this.props.longitude }</p>
        }

        {this.props.error &&
          <p>{ this.props.error }</p>
        }
      </div>
    );
  }
};
  
export default ClimaInfo;