import React from "react";
import { useState, useEffect  } from "react";
//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
    const [mostrar, serMostrar] = useState(false);
    const [cambio, setCambio] = useState(0);
    let array = ["nada","red","orange","green","purple"]
	
    useEffect(() => {
      
        if(cambio>4){
         setCambio(1)
        }else{
         setColor(array[cambio])
        }
      }, [cambio]);

	return (
        <>
        <div className="mt-5 d-flex justify-content-center">
		<ul className="semaforo rojo naranja verde purple">
        <li onClick={() =>setColor("red")} id={color == "red"?"red":""} ></li>
        <li onClick={() =>setColor("orange")} id={color == "orange"?"orange":""} ></li>
        <li onClick={() =>setColor("green")} id={color == "green"?"green":""} ></li>
        {mostrar?<li onClick={() =>setColor("purple")} id={color == "purple"?"purple":""} ></li>:""}
    </ul>
    </div>
    <div className="w-25 mx-auto mt-5 d-flex justify-content-around">
        <button className="btn btn-success" onClick={() =>serMostrar(true)}>Mostrar</button>
        <button className="btn btn-danger" onClick={() =>serMostrar(false)}>Ocultar</button>
        <button className="btn btn-primary" onClick={() =>setCambio(cambio+1)}>Cambiar</button>
    </div>
     </>
	);
};

export default Home;
