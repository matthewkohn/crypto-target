import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const CoinList = ({ id }) => {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true')
      .then((res) => res.json())
      .then(data => {
        setCoins(data);
        setIsLoaded(true);
      })
  }, []);

  const columns = [
    { field: 'rank', 
      headerName: 'Rank', 
      width: 80, 
      sortable: true,
    },
    {
      field: 'image',
      headerName: 'Logo',
      renderCell: (params: GridRenderCellParams) => (
        <>
          {/* {console.log(params)} */}
          <img
            src={params.formattedValue}
            alt={params.id}
            style={{width: 40}}
            />
        </>
      ),
      width: 100,
      sortable: false,
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 140,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
    },
    {
      field: 'price',
      headerName: 'Current Value',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      type: 'number',
      width: 140,
    },
    {
      field: 'change',
      headerName: '24hr Change',
      sortable: true,
      type: 'number',
      width: 140,
    },
  ];
  
  const rows = coins.map((coin) => {
    return {
      id: coin.id,
      rank: coin.market_cap_rank,
      image: coin.image,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: `$${coin.current_price.toFixed(2).toLocaleString()}`,
      change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
    }
  });

  console.log(coins);

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      CoinList Component
      {isLoaded ? 
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          checkboxSelection
          disableSelectionOnClick
        />
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default CoinList
