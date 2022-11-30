import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, api_key, language } from '../../services/api';

import './style.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key,
          language,
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loading'>
          <h1>Carregando Filmes...</h1>
        </div>
      ) : (
        <div className='container'>
          <div className='lista-filmes'>
            {movies.map((movie) => {
              return (
                <article key={movie.id}>
                  <strong>{movie.title}</strong>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <Link to={`/movie/${movie.id}`}>Acessar</Link>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
