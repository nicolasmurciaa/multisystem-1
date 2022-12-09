import React from "react";
import '../hojas-de-estilo/Boton.css'

function TituloMain (props){
    return(
        <h1 className='TituloDashboard'> {props.titulo} </h1>
    )
}
export default TituloMain;