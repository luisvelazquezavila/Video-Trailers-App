import { Button, OutlinedInput } from "@mui/material";
import { PropTypes } from "prop-types";
import searchIcon from '../assets/icons8-busqueda.svg'

export default function Searcher({ searchMovies, setSearchKey }) {
  return (
    <form className="container mb-4" onSubmit={searchMovies}>
          <OutlinedInput
            sx={{backgroundColor: "white"}}
            size="small"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <Button type="submit" component="button" sx={{ color: "white" }}>
            <img src={searchIcon} alt="Search Icon" />
          </Button>
        </form>
  )
}

Searcher.propTypes = {
  searchMovies: PropTypes.func,
  setSearchKey: PropTypes.func
}