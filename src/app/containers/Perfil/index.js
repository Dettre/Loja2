import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSimples from '../../components/Inputs/Simples';

class Perfil extends Component {

    state = {
        nome: "Usuario Teste",
        email: "usuarioo@it.com",
        telefone: "21 965254512",

       senhaAntiga: "",
       novaSenha: "",
       confrimarNovaSenha: "",
        
   }
   
    renderCabecalho(){
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Perfil" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples type="success"
                        onClick={() => alert("Salvar")}
                        label={"Salvar"} />
                </div>
            </div>
        )
    }

    renderDadosConfiguracao(){
        const { nome, email, telefone} = this.state;
        return (
            <div className="dados-configuracao">
                <TextoDados 
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome} name="nome" noStyle 
                            handleSubmit={(valor) => this.setState( { nome: valor} )} />
                    )} />
                <TextoDados 
                    chave="E-mail"
                    valor={(
                        <InputValor
                            value={email} name="email" noStyle 
                            handleSubmit={(valor) => this.onChangeInput({ email: valor} )} />
                    )} />
                    <TextoDados 
                    chave="Telefones"
                    valor={(
                        <InputValor
                            value={telefone} name="telefone" noStyle 
                            handleSubmit={(valor) => this.onChangeInput({ telefone: valor} )} />
                    )} />
            </div>
        )
    }

    renderDadosSenha(){
        const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;
        return (
            <div className="dados-configuracao">
                <InputSimples 
                    type="password"
                    name="senha-antiga"
                    label="Senha Antiga:"
                    value={senhaAntiga} 
                    onChange={(ev) => this.setState({ senhaAntiga: ev.target.value })} />
                <InputSimples 
                    type="password"
                    name="nova-senha"
                    label="Nova Senha:"
                    value={novaSenha} 
                    onChange={(ev) => this.setState({ novaSenha: ev.target.value })} />
                <InputSimples 
                    type="password"
                    name="confirmar-nova-senha"
                    label="Confirmar Nova Senha:"
                    value={confirmarNovaSenha}
                    onChange={(ev) => this.setState({ confirmarNovaSenha: ev.target.value} )} />
            </div>
        )
    }

    render(){
        return (
            <div className="Perfil full-width">
                <div className="Card">
                    { this.renderCabecalho() }
                    <div className="flex horizontal">
                        <div className="flex-1">
                            { this.renderDadosConfiguracao() }
                        </div>
                        <div className="flex-1">
                            { this.renderDadosSenha() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil;