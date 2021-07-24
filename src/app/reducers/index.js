import { combineReducers } from 'redux';

const reducers = combineReducers({
    root: (state, action) => state || {}
    /*  auth: authReducer,
    pedido: pedidoReducer,
    cliente: clienteReducer,
    categoria: categoriaReducer,
    produto: produtoReducer,
    variacao: variacaoReducer,
    avaliacao: avaliacaoReducer,
    configuracao: configuracaoReducer */
});

export default reducers;