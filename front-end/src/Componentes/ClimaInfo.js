import React from 'react';

/*
  Abaixo cada uma das 'props' são testadas, previnindo a não exibição em caso de erro
*/

const ClimaInfo = props => (  
  <div>
    {props.temperatura && 
      <p>Cidade pesquisada: {props.cidade}</p>
    }

    {props.pais && 
      <p>Sigla do país da cidade buscada: {props.pais}</p>
    }
        
    {props.temperatura && 
      <p>Temperatura: {props.temperatura}º</p>
    }
        
    {props.umidade && 
      <p>Umidade: {props.umidade}%</p>
    }
        
    {props.descricao && 
      <p>Condições: {props.descricao}</p>
    }

    {props.latitude &&
      <p>Latitude: {props.latitude}</p>
    }

    {props.longitude &&
      <p>Longitude: {props.longitude}</p>
    }

    {props.error &&
      <p>{props.error}</p>
    }
  </div>
);

export default ClimaInfo;