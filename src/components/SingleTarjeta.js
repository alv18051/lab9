import './SingleTarjeta.css'
import React from 'react'
import atras from'../img/back.png'
export default function singleTarjeta({ tarjeta, manejoAccion, voltear, deshabilitado }){

    const manejo = () => {
        if(!deshabilitado){
            manejoAccion(tarjeta)
        }
       
    }
    return(
        <div className = 'tarjeta'>
            <div className={ voltear ? "" : "voltear"}>
                <img className = 'enfrente' src={tarjeta.src} alt = 'tarjetaEnfrente'/>
                <img className = 'atras' src= {atras} onClick={manejo} alt = 'tarjetaAtras'/>
            </div>

        </div>
    )
}