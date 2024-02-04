import { Button, Typography } from "@mui/material";
import { PropTypes } from "prop-types";


export default function PosterMovie({ trailer, movie, setPlaying }) {

  return (
    <div className="container">
      <div className="">
        {trailer ? (
          <Button
            onClick={() => setPlaying(true)}
            variant='contained'
          >
            Reproducir Trailer
          </Button>
        ) : (
          "Sorry, no trailer available"
        )}
        <Typography 
          sx={{
            color: "white",
            fontSize: "clamp(2rem, 3.5vw, 4rem)",
            WebkitTextStroke: "1.5px black",
            textShadow: "1px 1px 3px black",
            mt: 1
          }} 
          variant="h2">
            {movie.title}
        </Typography>
        <Typography 
          sx={{ 
            color: "white", 
            WebkitTextStroke: ".3px black",
            textShadow: "1px 1px 6px black",
            fontWeight: "bold",
            margin: "1rem 0" 
          }}
        >
          {movie.overview}
        </Typography>
      </div>
    </div>
  )
}

PosterMovie.propTypes = {
  movie: PropTypes.object,
  trailer: PropTypes.object,
  setPlaying: PropTypes.func
}