import React from 'react';

class Formularios extends React.Component {
    render(){
        return (
            <form onSubmit={this.props.getData}>
                <input type="text" name="cidade" placeholder="Digite uma cidade"></input>
                <input type="text" name="pais" placeholder="Digite o país desta cidade"></input>
                <button>Obter informações climáticas</button>
            </form>
        );
    }
  }
  
  export default Formularios;