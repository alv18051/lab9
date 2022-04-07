import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import SingleTarjeta from './components/SingleTarjeta'



const imagenes = [
    {"src": '/img/img1y.jpg', parejas : false},
    {"src": '/img/img2y.png', parejas : false},
    {"src": '/img/img3y.jpg', parejas : false},
    {"src": '/img/img4.jpg', parejas : false},
    {"src": '/img/img5y.jpg', parejas : false},
    {"src": '/img/img6y.jpg', parejas : false}

]

function App(){

    const [tarjetas, seTa] = useState([])
    const [turnos, seTu] = useState(0)
    const [accion1, setAccion1] = useState(null)
    const [accion2, setAccion2] = useState(null)

    const mezclar = () => {

        const mezcladas = [...imagenes, ...imagenes]
            .sort (() => Math.random() - 0.5)
            .map((tarjeta) => ({...tarjeta, id: Math.random}))
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
                setTimeout(() => reset(), 2000)
            }else{
                console.log('dispareja')
                setTimeout(() => reset(), 2000)
            }
        }

    }, [accion1, accion2])

    console.log(tarjetas)

    const reset = () => {
        setAccion1(null)
        setAccion2(null)
        seTu(prevTurnos => prevTurnos + 1)
    }

    
    return(
        <div className='App'>
            <h1>Lab 09</h1>
            <button onClick={mezclar}>Jugar</button> 
            <div className='tablero'>
                {tarjetas.map(tarjeta => (
                    <SingleTarjeta 
                        key = {tarjeta.id} 
                        tarjeta = {tarjeta} 
                        manejoAccion = {manejoAccion} 
                        voltear = {tarjeta === accion1 || tarjeta === accion2 || tarjeta.parejas} 
                    />
                ))}    
            </div>    
        </div>
          

    );
}

export default App