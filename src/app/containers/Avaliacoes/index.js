import React,{ Component } from 'react';
import moment from 'moment'
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import Voltar from '../../components/Links/Voltar';


class Avaliacoes extends Component {
    
    render(){
     
      const dados = [
          {
              "Cliente": "Cliente 1",
              "Data": moment().format("DD/MM/YYYY"),
              "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

          },
          {
            "Cliente": "Cliente 2",
            "Data": moment().format("DD/MM/YYYY"),
            "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

        },
        {
            "Cliente": "Cliente 3",
            "Data": moment().format("DD/MM/YYYY"),
            "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

        },
        {
            "Cliente": "Cliente 4",
            "Data": moment().format("DD/MM/YYYY"),
            "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

        },
        {
            "Cliente": "Cliente 5",
            "Data": moment().format("DD/MM/YYYY"),
            "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

        },
        {
            "Cliente": "Cliente 6",
            "Data": moment().format("DD/MM/YYYY"),
            "botaoDetalhes": "/avaliacao/DSSD45455sd4D"

        },

        
      ]

        return (
            <div className="Avaliacoes full-width">
                <div className="Card">
                <Voltar path="/produto/jiohuiu" />

                    <Titulo tipo="h1" titulo="Avaliações - Produto 1" />
                    <br />
                   
                    <Tabela 
                        cabecalho={["Cliente", "Data"]}
                        dados={dados} />
                    </div>
            </div>
        )
    }
}

export default Avaliacoes;
