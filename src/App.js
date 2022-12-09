import './App.css';
import Boton from './componentes/boton';
import TituloMain from './componentes/Titulo';


function App() {
	return (
		<div className="App">
			<TituloMain titulo='MultiSystem'/>
			<div className='contenedor-boton'>
				<Boton texto='PBX'/>
				<Boton texto='PORTAL' />
				<Boton texto='SLM' />
			</div>
		</div>
	);
}

export default App;
