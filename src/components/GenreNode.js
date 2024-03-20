import React from 'react';

const GenreNode = ({ genreName, onClick }) => {
  return (
    <button className="genre-node" onClick={onClick}>
      {genreName}
    </button>
  );
};

export default GenreNode;