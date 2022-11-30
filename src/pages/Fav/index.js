import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Fav = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@primeflix');
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let filterMovie = movies.filter((m) => m.id !== id);

    setMovies(filterMovie);
    localStorage.setItem('@primeflix', JSON.stringify(filterMovie));
    toast.success('Filme excluido');
  }

  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>
      {movies.length === 0 && <span>Você não possui filme salvo :(</span>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div>
              <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
              <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fav;
