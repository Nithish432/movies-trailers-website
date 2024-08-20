import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";

function MovieDetails() {
    const { id } = useParams();
    // const movie = movieList[movieId];
  
    const [movie, setMovie] = useState({});
    useEffect(() => {
      fetch(`https://668ea164bf9912d4c92f2326.mockapi.io/movies/${id}`)
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    },[]);
  
    const styles = {
      color: movie.rating >= 8.5 ? "green" : "red",
    };
    const navigate = useNavigate();
  
    return (
      <div>
        <iframe
          width="100%"
          height="500px"
          src={movie.trailer}
          title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="movie-details-container">
          <div className="movie-specs">
            <h2 className="movie-name">{movie.name}</h2>
            <p style={styles} className="movie-rating">
              ⭐{movie.rating}
            </p>
          </div>
          <p className="movie-summary">{movie.summary}</p>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }

  export {MovieDetails}