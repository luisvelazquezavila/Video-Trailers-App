import { Grid } from "@mui/material";
import { PropTypes } from "prop-types";
import Movie from "./Movie";

export default function MoviesContainer({ movies, selectMovie }) {

  return (
    <Grid container spacing={5} sx={{padding: {md: "3rem", sm: "1.5rem", xs: "1rem"}}}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Movie movie={movie} selectMovie={selectMovie} />
        </Grid>             
      ))}
    </Grid>
  ) 
}

MoviesContainer.propTypes = {
  movies: PropTypes.array,
  selectMovie: PropTypes.func
}