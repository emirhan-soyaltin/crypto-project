import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './components/Coin';
import { CurrencyBitcoinSharp, Search } from '@mui/icons-material';



function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
useEffect(() => {
  axios
  .get(url)
  .then(res => {
    setCoins(res.data)
  }).catch(err => console.log(err))
}, [])


const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(coin => 
 coin.name.toLowerCase().includes(search.toLowerCase()) 
  )
  

  return (
    <>
    <header>
      <nav>
        <div className='logo-cnt'>
          <CurrencyBitcoinSharp style={{fontSize: '40px', color:'gold'}}/>
          <span className='colored'>My Crypto Tracker</span>
        </div>
      </nav>
    </header>
  <div className='coin-app'>
    
    <div className='coin-search'>
      
      <form>
        <input 
        type="text" 
        placeholder='Search' 
        className='coin-input' 
        onChange={handleChange} />
        
      </form>
      <div className='coin-container'>
     <div className="coin-row">
        <div className="coin" >
          <p className='coin-rank'>#</p>
        
        <h1 className='h1 x'>Name </h1>
        </div>
        <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className='coin-percent'>24h %</p>
            
            <p className='coin-volume x' id='x'>Volume</p>
            <p className='coin-ath '>ATH</p>
            <p className="coin-marketcap">
                Total Market Cap
            </p>
        </div>
     </div>
    </div>
      {filteredCoins.map(coin => {
        return (
          <>
          
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
          rank={coin.market_cap_rank}
          ath={coin.ath}
          />
          </>
        )
      })}
    </div>

  </div>
  </>
  );
}

export default App;
