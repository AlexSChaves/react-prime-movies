import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';
import { api, api_key, language } from '../../services/api';
import { toast } from 'react-toastify';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key,
            language,
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          alert('Filme não encontrado');
          navigate('/', { replace: true });
          return;
        });
    }

    loadFilme();
  }, [navigate, id]);

  function saveMovie() {
    // alert('Filme Salvo');
    const myList = localStorage.getItem('@primeflix');

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((filme) => filme.id === movie.id);

    if (hasMovie) {
      toast.success('Filme já está na lista');
      return;
    } else {
      toast.success('Filme salvo');
    }

    savedMovies.push(movie);
    localStorage.setItem('@primeflix', JSON.stringify(savedMovies));
  }

  return (
    <div>
      {loading ? (
        <div className='movie-info'>
          <h1>Carregando detalhes do filme </h1>
        </div>
      ) : (
        <div className='movie-info'>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h3>Sinopse</h3>
          <span>{movie.overview}</span>

          <strong>Avaliação: {movie.vote_average.toFixed(2)}</strong>

          <div className='area-buttons'>
            <button onClick={saveMovie}>Salvar</button>
            <button>
              <a
                href={`https://www.youtube.com/results?search_query=${movie.title}+movie`}
                target='_blank'
                rel='noreferrer'
              >
                Trailer
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
