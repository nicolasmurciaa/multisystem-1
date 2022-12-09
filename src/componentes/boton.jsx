import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton ({ texto }) {
	return (
		<button className='boton-clic'>
			{texto}
		</button>		
	)
}
export default Boton
