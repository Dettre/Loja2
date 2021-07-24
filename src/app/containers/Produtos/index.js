import React,{ Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Produtos extends Component {

    state = {
        pesquisa: "",
        limit: 5
    }

    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual })

    render(){
        const { pesquisa } = this.state;

      const dados = [
        {
            "Produto": "Mouse 1",
            "Categoria": "acessorios",
            "Disponivel": "sim",
            "botaoDetalhes": "/produto/dfsdfdsfsdfsdfsd"

        },
          {
            "Produto": "Mouse 2",
            "Categoria": "acessorios",
            "Disponivel": "não",
            "botaoDetalhes": "/produto/sd2145f1d4f54df"

        },
        {
            "Produto": "Mouse 3",
            "Categoria": "acessorios",
            "Disponivel": "sim",
            "botaoDetalhes": "/produto/5d4d4fd4f4d4"

        },
        {
            "Produto": "Mouse 4",
            "Categoria": "acessorios",
            "Disponivel": "sim",
            "botaoDetalhes": "/produto/sds55sd45s5d"

        },
      ]

      return (
        <div className="Produtos full-width">
            <div className="Card">
                <Titulo tipo="h1" titulo="Produtos" />
                <br />
                <br /><br />
                <div className="flex">
                    <div className="flex-3">
                        <Pesquisa
                            valor={pesquisa}
                            placeholder={"Pesquise aqui pelo nome do produto, descricao ou categoria..."}
                            onChange={(ev) => this.onChangePesquisa(ev)}
                            onClick={() => alert("Pesquisar")} />
                    </div>
                    <div className="flex-1 flex vertical">
                        <label>
                            <small>Ordenar por</small>
                        </label>
                        <select defaultValue="">
                            <option value={""}>Aleatório</option>
                            <option value={"alfabetica_a-z"}>Alfabética A-Z</option>
                            <option value={"alfabetica_z-a"}>Alfabética Z-A</option>
                            <option value={"preco-crescente"}>Preço Menor</option>
                            <option value={"preco-decrescente"}>Preço Maior</option>
                        </select>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <br />
                <Tabela 
                    cabecalho={["Produto", "Categoria", "Disponível"]}
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


export default Produtos;

