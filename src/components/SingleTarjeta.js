import './SingleTarjeta.css'

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
                <img className = 'atras' src="/img/back.png" onClick={manejo} alt = 'tarjetaAtras'/>
            </div>

        </div>
    )
}