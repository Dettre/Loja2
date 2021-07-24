import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';


class ListaDeProdutos extends Component {

    state = {
        pesquisa: "",
       atual: 0
        
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual })

    render(){
        const { pesquisa } = this.state;

      const dados = [
          {
              "Produto": "Mouse",
              "Estoque": 15,
              "Disponibilidade": "sim",
              "botaoDetalhes": "/categoria/dfgdfgdfgd"

          }, 
          {
            "Produto": "Mouse 2",
            "Estoque": 15,
            "Disponibilidade": "não",
            "botaoDetalhes": "/categoria/dfdffdfdf"

        },
        {
            "Produto": "Mouse 3",
            "Estoque": 15,
            "Disponibilidade": "sim",
            "botaoDetalhes": "/categoria/ddvdvdvvdv"

        },
        {
            "Produto": "Mouse 4",
            "Estoque": 15,
            "Disponibilidade": "sim",
            "botaoDetalhes": "/categoria/dddvdvdvdvd"

        },
        {
            "Produto": "Mouse 5",
            "Estoque": 15,
            "Disponibilidade": "não",
            "botaoDetalhes": "/categoria/sscsddvsdv"

        }
      ]

        return (
            <div className="ListaDeProdutos">
               <br/> <hr/>
                    <Titulo tipo="h3" titulo="Produtos da Categoria" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui pelo nome do produto ou descrição..."}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")} />
                    <br />
                    <Tabela 
                        cabecalho={["Produto", "Estoque","Disponibilidade"]}
                        dados={dados} />
                    <Paginacao 
                        atual={this.state.atual} 
                        total={120} 
                        limite={20} 
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>
            
        )
    }
}

export default ListaDeProdutos;


