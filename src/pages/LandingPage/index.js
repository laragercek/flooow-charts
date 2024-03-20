import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenreNode from '../../components/GenreNode';

const genres = ['Rock', 'Jazz', 'Hip-Hop', 'Electronic', 'Classical','Samba']; // Example genres

const LandingPage = () => {
  let navigate = useNavigate(); // Hook for navigation

  const handleGenreClick = (genreName) => {
    navigate(`/genres/${genreName}`); // Navigate to a genre-specific page
  };

  return (
    <div>
      <h1>flooow charts</h1>
      <div>
        {genres.map(genre => (
          <GenreNode key={genre} genreName={genre} onClick={() => handleGenreClick(genre)} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
