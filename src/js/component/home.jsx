import React , { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [ selecionado, setSeleccion ] = useState("rojo");
	const [ mostrarMorado, setNuevo ] = useState(false);

	function cambiaColor(){
		if (selecionado =="rojo"){
			setSeleccion("amarillo");
		} else if (selecionado =="amarillo"){
			setSeleccion("verde");
		} else if ((selecionado == "verde") && (mostrarMorado == true)){
			setSeleccion("morado") 
		} else setSeleccion("rojo");
	};

	function agregaNuevo(){
		setNuevo(true);
		if (mostrarMorado == true){
			setNuevo(false);
		}
	}
	
	return (
		<div className="container">
			<button onClick={cambiaColor} className="mt-3 cambia-luz">Cambiar color</button>
			<button onClick={agregaNuevo} className="mt-5 cambia-luz">agregar color morado</button>
			<div className=" fondo">				
				<canvas className="mt-3 poste"></canvas>
				<div className="conjunto-luces">
					<canvas id="rojo" onClick={()=> setSeleccion("rojo")} className={"luces  rojo "+ ((selecionado ==="rojo") ? "selected":"")}></canvas>
					<canvas id="amarillo" onClick={()=> setSeleccion("amarillo")} className={"luces  amarillo "+ ((selecionado ==="amarillo") ? "selected":"")}></canvas>
					<canvas id="verde" onClick={()=> setSeleccion("verde")} className={"luces  verde "+ ((selecionado ==="verde") ? "selected":"")}></canvas>
					<canvas id="morado" onClick={()=> setSeleccion("morado")} className={"luces  morado "+ ((selecionado ==="morado") ? "selected":"") + (mostrarMorado ? " show ":" noshow ")}></canvas>
				</div>
				
			</div>
		
		</div>
	);
};

export default Home;
