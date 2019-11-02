import React from 'react';

import Logo from "../ComponenteMain/EstiloMain/smarkio.png";

const Listagens = () => {
    return (
      <div className="text-center mx-auto">
        
        <div className="title">
          <img src={Logo} alt="smarkioLogo"/>
        </div>

        <div className="subtitle" id="mostSearch">
          <div class="alert alert-orange text-white" role="alert">
            Top 5 cidades mais pesquisadas:
          </div>
        </div>

        <div className="subtitle" id="lastSearch">
          <div class="alert alert-orange text-white" role="alert">
            Últimas cidades pesquisadas:
          </div>
        </div>

      </div>
    );
};
  
export default Listagens;