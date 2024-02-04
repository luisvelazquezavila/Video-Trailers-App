import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export default function Movie({ movie, selectMovie }) {

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <CardActionArea 
      sx={{mb: 1, "&:hover": {cursor: "pointer", transform: "scale(1.02)"}}}
      onClick={() => selectMovie(movie)}
    >
      <Card>
      <CardMedia
        component="img"
        src={`${URL_IMAGE + movie.poster_path}`}
        alt=""
        sx={{objectFit: "cover"}}
      />
      </Card>
      <Typography 
        component="p" 
        fontSize={24} 
        color="white"
        sx={{"&:hover": {cursor: "pointer", textDecoration: "underline"}}}
      >
        {movie.title}
      </Typography>
    </CardActionArea>  
  )
}

Movie.propTypes = {
  movie: PropTypes.object,
  selectMovie: PropTypes.func
}