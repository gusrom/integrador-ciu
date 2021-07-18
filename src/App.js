import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import { Fragment } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
  };

  const filtroCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Fragment>
      <div className='coin-app'>
        <div className='coin-busqueda'>
          <h1 className='coin-texto'>Buscar moneda</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Busque aquí...'
            />
          </form>
          
        </div>

        
        {filtroCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              nombre={coin.name}
              precio={coin.current_price}
              simbolo={coin.symbol}
              volumen={coin.total_volume}
              marketCap={coin.market_cap}
              imagen={coin.image}
              cambioPrecio={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </Fragment>  
  );
}

export default App;
