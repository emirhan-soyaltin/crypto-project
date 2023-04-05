import React from 'react'

function Coin({id,name, image, symbol, price, volume, priceChange, marketcap, rank ,ath}) {
  return (
    <div className='coin-container'>
     <div className="coin-row">
        <div className="coin" key={id}>
          <p className='coin-rank'>{rank}</p>
        <img src={image} alt="crypto" />
        <h1 className='h1'>{name} <span className='coin-symbol'>({symbol})</span> </h1>
        </div>
        <div className="coin-data">
            <p className="coin-price">${price}</p>
            {priceChange < 0 ? (
                <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>) }
            <p className='coin-volume'>${volume.toLocaleString()}</p>
            <p className='coin-ath'>${ath}</p>
            <p className="coin-marketcap">
                ${marketcap.toLocaleString()}
            </p>
        </div>
     </div>
    </div>
  )
}

export default Coin