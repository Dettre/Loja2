import React,{ Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';

class DetalhesDosPedidos extends Component {


    render(){
        const dados= [
            {
                "ID": "uhhihihiu",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/uhhihihiu"
            },
            {
             "ID": "d1545c15v",
             "Valor Total": 105.90,
             "Data": moment().toISOString(),
             "Situação": "Aguardando Pagamento",
             "botaoDetalhes": "/pedido/d1545c15v"
            },
            {
             "ID": "ijiojoijknjn",
             "Valor Total": 26.72,
             "Data": moment().toISOString(),
             "Situação": "Pagamento Concluído",
             "botaoDetalhes": "/pedido/ijiojoijknjn"
            }
        ]
        return (
            <div className="Detalhes-dos-Pedidos">
                <Titulo tipo="h3" titulo="Pedidos Feitos" />
                <br />
                <Tabela 
                    cabecalho={["ID", "Valor Total", "Data", "Situação"]}
                    dados={dados} />
                  </div>
        )
    }
}
        

export default DetalhesDosPedidos;
