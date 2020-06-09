import React,{Component} from 'react';
import api from '../../services/api';
import './index.css';

export default class Login extends Component{
    state = {
        username : ''
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        const response = await api.post(`/login/${this.state.username}`);
        const {msg} = response.data;
        //console.log(msg);
        if(msg === 0){
            alert('Usuário não encontrado');
        }else{
            this.props.history.push('/dashboard');
        }
    }

    //Tem que passar dessa forma, e não handleLogin(event), porque ai é uma chamada de CallBack
    handleLogin = event => {
        /*A função logo abaixo é para prevenir o evento Default para evitar de ficar senmpre dando refresh na pagina*/
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }
    
    render(){
        return(
            <div className='main-containerLogin'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder='Digite o seu usuário do GitHub'
                    type='text'
                    name='username'
                    value={this.state.username}
                    //Deixando a function desse jeito sem o () ela só vai executar uma vez ao ativar o evento, e não o tempo inteiro
                    onChange={this.handleLogin}/>
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}