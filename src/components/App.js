import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import './App.css'
import SingleTarjeta from './SingleTarjeta'
import img1y from'../img/img1y.jpg'
import img2y from'../img/img2y.png'
import img3y from'../img/img3y.jpg'
import img4y from'../img/img4.jpg'
import img5y from'../img/img5y.jpg'
import img6y from'../img/img6y.jpg'
import img7y from'../img/img7y.jpg'
import img8y from'../img/img8y.jpg'
import back from'../img/back.png'

const imagenes = [
    {"src": img1y, parejas : false},
    {"src": img2y, parejas : false},
    {"src": img3y, parejas : false},
    {"src": img4y, parejas : false},
    {"src": img5y, parejas : false},
    {"src": img6y, parejas : false},
    {"src": img7y, parejas : false},
    {"src": img8y, parejas : false}    

]

function App(){

    const [tarjetas, seTa] = useState([])
    const [turnos, seTu] = useState(0)
    const [accion1, setAccion1] = useState(null)
    const [accion2, setAccion2] = useState(null)
    const [deshabilitado, setDeshabilitado] = useState(false)
    const [fin, setFin] = useState(false)

    const mezclar = () => {

        const mezcladas = [...imagenes, ...imagenes]
            .sort (() => Math.random() - 0.5)
            .map((tarjeta, index) => ({...tarjeta, id: index }))
        seTa(mezcladas)
        seTu(0)

    }

    const manejoAccion = (tarjeta) => {

        if (accion1 == null){
            setAccion1(tarjeta)
        } else if(accion1 != null){
            setAccion2(tarjeta)
        }

    }

    useEffect(()=>{
        
        if(accion1 != null && accion2 != null){
            setDeshabilitado(true) 
            if(accion1.src === accion2.src){
                seTa(tarjetaPrev => {
                    return tarjetaPrev.map( tarjeta=> {
                        if(tarjeta.src === accion2.src){
                            return {... tarjeta, parejas: true}
                        }else{
                            return tarjeta
                        }
                    })
                })
                console.log('pareja')
                setTimeout(() => reset(), 900)
            }else{
                console.log('dispareja')
                setTimeout(() => reset(), 900)
            }
        }

    }, [accion1, accion2])

    console.log(tarjetas)

    const reset = () => {
        setAccion1(null)
        setAccion2(null)
        seTu(prevTurnos => prevTurnos + 1)
        setDeshabilitado(false)
    }

    const termino = () => {
        setFin(false)
        let x = 0;
        tarjetas.forEach((tarjeta) =>{
            if(tarjeta.parejas === true){
                x = x + 1;
                if(x === tarjetas.length){
                    setFin(true)
                    alert("has ganado")
                }

            }

        }


    )}
    
    return(
        <div className='App'>
            <h1>Lab 09</h1>
            <button onClick={mezclar}>Nuevo Juego</button> 
            <h2>turnos : {turnos}</h2> 
            <div className='tablero'>
                {tarjetas.map(tarjeta => (
                    <SingleTarjeta 
                        key = {tarjeta.id} tarjeta = {tarjeta} manejoAccion = {manejoAccion} 
                        voltear = {tarjeta === accion1 || tarjeta === accion2 || tarjeta.parejas} 
                        deshabilitado = {deshabilitado}
                    />
                ))}    
            </div>
          
        </div>
          

    );
}

export default App;