import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import { TextoDados } from '../../components/Texto/Dados';
import ButtonSimples from '../../components/Button/Simples';
import TabelaSimples from '../../components/Tabela/Simples';


class DetalhesDoPedido extends Component {

    renderCabecalho(){
      
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2019"/>
                </div>
                <div className="flex-1 flex flex-end">
                                          
                            <ButtonSimples 
                                type="danger" 
                                label="CANCELAR PEDIDO" 
                                onClick={() => alert("Cancelar Pedido")} />
                    
                </div>
            </div>
        )
    }


    renderDadosDoCliente(){
     return (
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados do Cliente" />
                <br />
                <TextoDados chave="Nome" valor="Cliente 1" />
                <TextoDados chave="CPF" valor="111.222.333-56"  />
                <TextoDados chave="Telefone" valor="22 965623254" />
                <TextoDados chave="Data de Nascimento" valor="28/10/1983" />
            </div>
        )
    }


    renderDadosDeEntrega(){
     return (
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados de Entrega" />
                <br />
                <TextoDados chave="Endereco" valor="rua teste" />
                <TextoDados chave="Numero" valor="51" />
                <TextoDados chave="Bairro" valor= "uberava" />
                <TextoDados chave="Cidade" valor= "Rj" />
                <TextoDados chave="Estado" valor= "RJ" />
                <TextoDados chave="CEP" valor= "22753-053" />
            </div>
        )
    }

    renderDadosDePagamento(){
     return (
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Dados de Pagamento" />
                <br />
                <TextoDados chave="Taxa de Entrega" valor="RS 15,25 (PAC)" />
                <TextoDados chave="Valor do Pedido" valor="R$ 32,00" />
                <TextoDados chave="Valor Total" valor="47,50" />
                <TextoDados chave="Forma de Pagamento" valor="BOLETO" />
            </div>
        )
    }

    renderDadosDoCarrinho(){
      

        const dados = [
            {
                "Produto": "produto 1",
                "Preço und.": "R$ 12,00",
                "Quantidade": "1",
                "Preço Total": "R$ 12,00"    
            },
            {
                "Produto": "produto 2",
                "Preço und.": "R$ 21,00",
                "Quantidade": "2",
                "Preço Total": "R$ 30,00"    
            }
        ]
        return (
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Carrinho" />
                <br />
                <TabelaSimples 
                    cabecalho={[ "Produto", "Preço Und.", "Quantidade", "Preço Total" ]}
                    dados={dados} />
            </div>
        )
    }

render(){
    return (
        <div className="Detalhes-do-Pedido">
            { this.renderCabecalho() }
            <div className="flex vertical">
            <div className="flex horizontal">
            { this.renderDadosDoCliente() }
            { this.renderDadosDoCarrinho() }
              </div>
              <div className="flex horizontal">
           
            { this.renderDadosDeEntrega() }
            { this.renderDadosDePagamento() }
           </div>
     </div>
        </div>
    )
}
}

export default DetalhesDoPedido;

