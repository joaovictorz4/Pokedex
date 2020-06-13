import React from 'react'
import './Header.css'
import imagem from "./logo.png"

export default props => 
    <div className="header">
        
        <a href="/"><img src={imagem} alt=""></img></a>
        <nav>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contatos</a></li>
            <li><a href="#">Localização</a></li>
            <li><a href="#">Agenda</a></li>
            
        </nav>
    </div>