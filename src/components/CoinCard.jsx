import React, { useEffect, useState } from 'react'

  // .id, .symbol, .name, .image, .current_price, .high_24h, .low_24h, .ath, .price_change_percentage_24h, .market_cap, .circulating_supply
  // .sparkline_in_7d.price
  // .description

const CoinCard = ({ id }) => {
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true')
      .then((res) => res.json())
      .then(data => {
        setCoin(data);
      })
  }, []);

  console.log(coin);

  return (
    <div>
      CoinCard Component
    </div>
  )
}

export default CoinCard
