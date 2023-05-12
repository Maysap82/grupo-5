import React from "react";
import './Header.css';
import BotaoMenu from "../BotaoMenu/BotaoMenu";
import logo from "./logo bees.jpg"

function Header(props){
    return(
        <header>
            <div id="imagem1">
                
            <img src={logo} alt="imagem1"></img>
            </div>
            <BotaoMenu nome="MODELO"/>
            <BotaoMenu nome="OFERTAS"/>
        </header>
    )
}

export default Header;