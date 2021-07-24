import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';

class Avaliacao extends Component {

renderCabecalho(){
    return (
        <div className="flex">
            <div className="flex-1 flex vertical">
                <Titulo tipo="h3" titulo="Avaliação - Produto 1" />
                <Titulo tipo="h4" titulo="Cliente - Cliente 1" />
            </div>
            <div className="flex-1 flex flex-end">
                <ButtonSimples 
                    type="danger"
                    onClick={() => alert("deletando")}
                    label="Remover" />
            </div>
        </div>
    )
}

renderMensagem(){
    
    return (
        <div className="Mensagem">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro
        </div>
    )
}

render(){
    return (
        <div className="Avaliacao full-width">
            <div className="Card">
                <Voltar path="/avaliacoes/jiohuiu" />
                { this.renderCabecalho() }
                { this.renderMensagem() }
            </div>
        </div>
    )
}
}

export default Avaliacao;