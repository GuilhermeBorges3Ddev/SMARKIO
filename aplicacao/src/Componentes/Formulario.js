import React from 'react';

const Formulario = props => {
    return (
        <form onSubmit={props.getData}>
            <div className="row">
                <input type="text" name="cidade" placeholder="Digite uma cidade"></input>
            </div>
            <div className="row">
                <input type="text" name="pais" placeholder="Digite o país desta cidade"></input>
            </div>
            <button>Obter informações climáticas</button>
        </form>
    );
}
  
export default Formulario;