import React from 'react';
import { Fragment } from 'react';
import './Coin.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const coin = ({
  nombre,
  precio,
  simbolo,
  marketCap,
  volumen,
  imagen,
  cambioPrecio
}) => {
  return (
  
    
    <Fragment>
      <div className='coin-container'>
        
        <div className='coin-fila'>
          <div className='coin'>
            <img src={imagen} alt='crypto' />
            <h1>{nombre}</h1>
            <p className='coin-simbolo'>{simbolo}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-precio'>${precio}</p>
            <p className='coin-volumen'>${volumen.toLocaleString()}</p>

            {cambioPrecio < 0 ? (
              <p className='coin-porcentaje red'>{cambioPrecio.toFixed(2)}%</p>
            ) : (
              <p className='coin-porcentaje green'>{cambioPrecio.toFixed(2)}%</p>
            )}

            <p className='coin-marketCap'>
              Mkt Cap: ${marketCap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default coin;
