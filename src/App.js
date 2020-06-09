import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './App.css'

export default class App extends Component{
  //Essa é a função que vai renderizar os componetes na nossa tela
  render(){
    return(
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    )
  }
}

