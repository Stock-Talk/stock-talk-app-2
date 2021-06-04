import React, { useEffect, useState } from 'react';
import axios from 'axios';
const dotenv = require('dotenv');


function StockNews() {
    // let symbol = ; This will be where we capture the symbol that is entered in the search bar
    const key = process.env.REACT_APP_FMP_API_KEY;
    const url = `https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=50&page=1&apiKey=Tsr7xsK4s1VfxyjLgceQjG9IwsIpphMp`;
    const [news, setNews] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setNews(response.data);
                console.log(response.data);
            })
    }, [url])

    if (news) {   
        console.log(news[0].image + " line 23");
        content = 
            <div> 
                <div>
                    <h1>DATE IS {news[0].timestamp}</h1>
                    <h1>TITLE IS {news[0].title}</h1>
                    <h1>URL IS {news[0].url}</h1>
                    <h1>SUMMARY IS {news[0].summary}</h1>
                </div>
                <div>
                    <h1>DATE IS {news[1].timestamp}</h1>
                    <h1>TITLE IS {news[1].title}</h1>
                    <h1>URL IS {news[1].url}</h1>
                    <h1>SUMMARY IS {news[1].summary}</h1>
                </div>
            </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default StockNews;