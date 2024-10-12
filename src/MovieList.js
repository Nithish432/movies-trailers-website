import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import {API} from "./global";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

function MovieList() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    // console.log("Deleting...", id)

    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((mv) => getMovies());
  };

  return (
    <div className="movie-list-container">
      {movies.map((element, index) => (
        <Movie
          key={element.id} // change to _id
          movie={element}
          id={element.id} // change to _id
          deleteButton={
            <IconButton
              onClick={() => deleteMovie(element.id)} // change to _id
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              color="secondary"
              onClick={() => navigate(`/movies/edit/${element.id}`)} // change to _id
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

export { MovieList };
