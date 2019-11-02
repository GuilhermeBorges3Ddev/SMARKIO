import React from 'react';

import Logo from "../ComponenteMain/EstiloMain/smarkio.png";

const Titulos = () => {
    return (
      <div className="mt-0">
        
        <div className="title">
          <img src={Logo} alt="smarkioLogo"/>
        </div>
        
        <p  className="subtitle">Encontre temperatura, umidade, clima e etc...</p>
      </div>
    );
};
  
export default Titulos;