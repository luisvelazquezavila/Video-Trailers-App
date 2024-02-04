import axios from 'axios'
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Main from './components/main/Main';
import MoviesContainer from './components/movies/MoviesContainer';
import Title from './components/Title';
import Searcher from './components/Searcher';

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2de4fdccf8723437fb4ecd3c510c2e52";

  // Variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  // const [playing, setPlaying] = useState(false);

  // Función para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // Función para la petición de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    //return data
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);

    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // Función para buscar películas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Box sx={{backgroundColor: "#2E2E2E", padding: ".1px"}}>

        <Title title="Trailer Popular Movies" />

        <Searcher searchMovies={searchMovies} setSearchKey={setSearchKey} />

        <Main movie={movie} trailer={trailer} />

        <MoviesContainer movies={movies} selectMovie={selectMovie} />
      </Box>
    </>
  )
}

export default App;

