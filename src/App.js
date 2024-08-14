import React, { useState } from 'react';
import QuoteCard from './Page/QouteCard';
import quotesData from './model/quote.json';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
  };

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <QuoteCard quote={quotesData[currentIndex]} />
      <button onClick={handleNextQuote} className="next-quote-button">
      Next
      </button>
    </div>
  );
}

export default App;
