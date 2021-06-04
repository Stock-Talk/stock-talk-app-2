import React, { useEffect, useState } from 'react';
import axios from 'axios';
const dotenv = require('dotenv');


function SymbolSearch() {
    // let symbol = ; This will be where we capture the symbol that is entered in the search bar
    const key = process.env.REACT_APP_FMP_API_KEY;
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/aapl?apikey=c007824761186e078132989110521634`;
    const [stock, setStock] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setStock(response.data)
                console.log(response.data)
            })
    }, [url])

    if (stock) {   
        // console.log(stock + " line 23");
        // console.log(stock.symbol + " line 24");
        // console.log(stock.historical[0].date + " line 25");
        content =  
            <div>
                <h1>stock image is {stock.historical[0].image}</h1>
                <h1>stock symbol is {stock.symbol}</h1>
                <h1>date is {stock.historical[0].label}</h1>
                <h1>closing price is {stock.historical[0].close}</h1>
                <h1>percent change is {stock.historical[0].changePercent}%</h1>
                <h1>change amount is {stock.historical[0].change}</h1>

            </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default SymbolSearch;