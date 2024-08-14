import React from 'react'
import './QuoteCard.css'

const QuoteCard =({ quote }) => {
    return(
        <div className='all'>
        <div className='quote-card'>
            <p className='quote-text'>"{quote.quote}"</p>
            <p className='quote-author'>"{quote.author}"</p>
        </div>
        </div>
    );
}
export default QuoteCard