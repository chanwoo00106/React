import React from 'react';

export default function Map() {
  const names = ['Teemo', 'Spring', 'Summer', 'Autumn', 'Winter'];
  return (
    <div>
      <h1>Map</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
