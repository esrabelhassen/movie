import React, { useState } from 'react';
import backgroundImage from './assortment-cinema-elements-red-background-with-copy-space.jpg';

const AiSearch = () => {
  const [data, setData] = useState({ movies: [], tv_shows: [] });
  const [title, setTitle] = useState('');

  const fetchRecommendations = () => {
    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  const cardStyle = {
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    transition: 'transform 0.3s ease-out',
    maxWidth: '600px',
    width: '100%',
    color: 'white',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.02)',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '12px',
    width: '100%',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#E50914',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#B20710',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '10px 0',
    padding: '12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    fontSize: '18px',
  };

  const listItemHoverStyle = {
    ...listItemStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  const [buttonHover, setButtonHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [listItemHover, setListItemHover] = useState(false);

  return (
    <div style={containerStyle}>
      <div
        style={cardHover ? cardHoverStyle : cardStyle}
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <input
          style={inputStyle}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter Movie or TV Show Title, Genre, Description..."
        />
        <button
          style={buttonHover ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={fetchRecommendations}
        >
          Search
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ ...cardStyle, width: '48%' }}>
          <h2>Movies</h2>
          <ul style={listStyle}>
            {data.movies.map((movie, index) => (
              <li
                key={index}
                style={listItemHover ? listItemHoverStyle : listItemStyle}
                onMouseEnter={() => setListItemHover(true)}
                onMouseLeave={() => setListItemHover(false)}
              >
                {movie}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ ...cardStyle, width: '48%' }}>
          <h2>TV Shows</h2>
          <ul style={listStyle}>
            {data.tv_shows.map((show, index) => (
              <li
                key={index}
                style={listItemHover ? listItemHoverStyle : listItemStyle}
                onMouseEnter={() => setListItemHover(true)}
                onMouseLeave={() => setListItemHover(false)}
              >
                {show}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiSearch;
