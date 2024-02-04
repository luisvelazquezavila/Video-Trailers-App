import { Box } from "@mui/material";
import { useState } from "react";
import { PropTypes } from "prop-types";
import PosterMovie from "./PosterMovie";
import '../../App.css'
import Video from "./Video";

export default function Main({ movie, trailer }) {

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const [playing, setPlaying] = useState(false);

  return (
    <>
      <main>
          {movie ? (
            <Box
              sx={{
                minHeight: "700px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`
              }}
            >
              {playing ? (
                <Video trailer={trailer} setPlaying={setPlaying} />
              ) : (
                <PosterMovie movie={movie} trailer={trailer} setPlaying={setPlaying} />
              )}
            </Box>
          ) : null}
        </main>
    </>
  )
}

Main.propTypes = {
  movie: PropTypes.object,
  trailer: PropTypes.object
}