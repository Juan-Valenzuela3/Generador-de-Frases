import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter as faSquareTwitter, faInstagram as faSquareInstagram, faFacebook as faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import './index.css';

const Quote = () => {
  const Quotes = [
    {
      cita: "Innovation distinguishes between a leader and a follower.",
      author: 'Steve Jobs',
      id: 1,
    },
    {
      cita: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: 'Nelson Mandela',
      id: 2, 
    },
    {
      cita: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
      id: 3,
    },
    {
      cita: "Believe you can and you're halfway there.",
      author: 'Theodore Roosevelt',
      id: 4,
    },
    {
      cita: "It does not matter how slowly you go as long as you do not stop.",
      author: 'Confucius',
      id: 5,
    },
    {
      cita: "Whatever you can do, or dream you can do, begin it. Boldness has genius, power, and magic in it.",
      author: 'Johann Wolfgang von Goethe',
      id: 6,
    },
    {
      cita: "When you give up on your dreams, you die while you're still alive.",
      author: 'Walt Disney',
      id: 7,
    },
    {
      cita: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: 'Franklin D. Roosevelt',
      id: 8,
    },
    {
      cita: "The journey of a thousand miles begins with a single step.",
      author: 'Lao Tzu',
      id: 9,
    },
    {
      cita: "Let us never forget that every single moment is an opportunity to make a difference.",
      author: 'Oprah Winfrey',
      id: 10,
    },
    {
      cita: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: 'Steve Jobs',
      id: 11,
    },
    {
      cita: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
      author: 'Steve Jobs',
      id: 12,
    },
    {
      cita: "If you can dream it, you can do it.",
      author: 'Walt Disney',
      id: 13,
    },
    {
      cita: "It is never too late to be what you might have been.",
      author: 'George Eliot',
      id: 14,
    },
    {
      cita: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
      author: 'Joel Brown',
      id: 15,
    },
    {
      cita: "The difference between ordinary and extraordinary is that little extra.",
      author: 'Jimmy Johnson',
      id: 16,
    },
    {
      cita: "You are never too old to set another goal or to dream a new dream.",
      author: 'Les Brown',
      id: 17,
    },
    {
      cita: "Where you are going is more important than how fast you get there.",
      author: 'Alice Walker',
      id: 18,
    },
    {
      cita: "The only way to discover your true potential is by pushing your limits.",
      author: 'Wayne Gretzky',
      id: 19,
    },
    {
      cita: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: 'Helen Keller',
      id: 20,
    },
  ];
  const randomIndex = Math.floor(Math.random() * Quotes.length);
  return Quotes[randomIndex];
};

const Container = () => {
  const [currentQuote, setCurrentQuote] = useState(() => Quote());
  const [pageColor, setPageColor] = useState('orange');

  const colors = [
    '#8a2be2',
    '#3d636e',
    '#862b24',
    '#746f6f',
    '#297429'
  ];

  const generateNewColor = () => {
    let newColor;
    do {
      const randomIndex = Math.floor(Math.random() * colors.length);
      newColor = colors[randomIndex];
    } while (newColor === pageColor);
    setPageColor(newColor);
    setCurrentQuote(Quote());
  };

  useEffect(() => {
    document.body.style.backgroundColor = pageColor;
  }, [pageColor]);

  // Añadimos validación para currentQuote
  if (!currentQuote || !currentQuote.cita) {
    return <div>Loading...</div>; // O cualquier mensaje de carga o manejo de errores
  }

  return (
    <div id='quote-box'>
      <div className='text'>
        <i className="comilla" style={{ color: pageColor }}>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </i>
        <span id='text' style={{ color: pageColor }}> {currentQuote.cita} </span>
        <i className="comilla" style={{ color: pageColor }}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </i>
      </div>

      <div className='author' style={{ color: pageColor }}>
        <span id='author'>- {currentQuote.author} </span>
      </div>

      <div className='buttons'>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote.cita)} - ${encodeURIComponent(currentQuote.author)}`}>
          <i className="social-media" style={{ color: pageColor }}>
            <FontAwesomeIcon icon={faSquareTwitter} />
          </i>
        </a>
        <button id='new-quote' onClick={() => { generateNewColor(); setCurrentQuote(Quote()); }} style={{ backgroundColor: pageColor }}>
          New Quote
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(<Container />);
