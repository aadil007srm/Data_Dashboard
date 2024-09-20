// NewsTicker.js
import React from 'react';
import './NewsTicker.css'; // Optional: For styling

const NewsTicker = ({ news }) => {
  return (
    <div className="news-ticker">
      <marquee>
        {news.map((item, index) => (
          <span key={index} className="news-item">{item}</span>
        ))}
      </marquee>
    </div>
  );
};

export default NewsTicker;
