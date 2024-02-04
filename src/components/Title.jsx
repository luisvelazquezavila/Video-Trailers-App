import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export default function Title({ title }) {
  return (
    <Typography 
          component="h1" 
          sx={{
            fontSize: "clamp(2rem, 2vw, 4rem)",
            textAlign: "center",
            margin: "2rem 0",
            color: "white"
          }}
        >
          {title}
    </Typography>
  )
}

Title.propTypes = {
  title: PropTypes.string
}