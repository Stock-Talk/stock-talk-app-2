import React, { useEffect, useState } from 'react';
import axios from 'axios';
const dotenv = require('dotenv');


function SymbolSearch() {
    // let symbol = ; This will be where we capture the symbol that is entered in the search bar
    const key = process.env.REACT_APP_FMP_API_KEY;
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=c007824761186e078132989110521634`;
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
        console.log(stock + " line 23")
        content =  
            <div>
                <h1>{stock.data}</h1>
            </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default SymbolSearch;