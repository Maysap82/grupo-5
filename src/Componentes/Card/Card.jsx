import React from "react";
import './Card.css';



function Card(props){
    
    return(
        <div id="principal">
            <div id="imagem">
                <img src={props.imagem}  alt="imagem"/>
            </div>
            

        </div>
    );
};

export default Card;