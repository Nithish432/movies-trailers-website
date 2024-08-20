import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";


// Component declaration
function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  // unary, binary, ternary
  // ternary operator
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <>
      <Card className="movie-container">
        <img src={movie.poster} alt={movie.name} className="movie-poster" />
        <CardContent>
          <div className="movie-specs">
            <h2 className="movie-name">
              {movie.name}
              <IconButton
                color="primary"
                onClick={() => setShow(!show)}
                aria-label="Toggle summary"
              >
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => navigate(`/movies/${id}`)}
                aria-label="Movie Details"
              >
                <InfoIcon />
              </IconButton>
            </h2>
            <p style={styles} className="movie-rating">
              ⭐{movie.rating}
            </p>
          </div>
          {/* conditional operator */}
          {show ? <p className="movie-summary">{movie.summary}</p> : null}
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
          <Counter />
          <Box sx={{display: "flex", justifyContent: "flex-end" }}>
            {editButton}{deleteButton}
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export { Movie };