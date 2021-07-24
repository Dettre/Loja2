import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';


class Categorias extends Component {

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
              "Categoria": "Acessorios",
              "Qtd. de Produtos": 15,
              "botaoDetalhes": "/categoria/acessorios"

          },
          {
            "Categoria": "Computadores",
            "Qtd. de Produtos": 13,
            "botaoDetalhes": "/categoria/computadores"

        },
        {
            "Categoria": "Rede",
            "Qtd. de Produtos":16,
            "botaoDetalhes": "/categoria/rede"

        },
        {
            "Categoria": "Hardware",
            "Qtd. de Produtos": 18,
            "botaoDetalhes": "/categoria/hardware"

        },
        {
            "Categoria": "Periféricos",
            "Qtd. de Produtos": 14,
            "botaoDetalhes": "/categoria/perifericos"

        },
          
      ]

        return (
            <div className="Categorias full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Categorias" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquisa aqui pelo nome da categoria..."}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")} />
                    <br />
                    <Tabela 
                        cabecalho={["Categoria", "Qtd. de Produtos"]}
                        dados={dados} />
                    <Paginacao 
                        atual={this.state.atual} 
                        total={120} 
                        limite={20} 
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>
            </div>
        )
    }
}

export default Categorias;


