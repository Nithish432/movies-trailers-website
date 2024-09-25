import { useParams } from "react-router-dom";
import { Button } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import {API} from "./global";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const editValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  rating: yup
    .number()
    .required("why not fill this rating?")
    .min(0, "Need a bigger rating😂")
    .max(10, "Too much rating😂"),
  poster: yup
    .string()
    .required("why not fill this poster?")
    .min(4, "Need a longer poster😂"),
  summary: yup
    .string()
    .required("why not fill this summary?")
    .min(20, "Need a longer summary😂"),
  trailer: yup
    .string()
    .required("why not fill this trailer?")
    .min(4, "Need a longer trailer😂"),
});

// Smart & Presentational component (Pattern) - HOC (Higher Ordered Component)
// Smart component - Getting Data
export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "loading...";
  
}

// Presentational component - Using the Data
function EditMovieForm({ movie }) {
  const { handleSubmit, values, handleBlur, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        rating: movie.rating,
        poster: movie.poster,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: editValidationSchema,
      onSubmit: (updateMovie) => {
        console.log("Form values", updateMovie);
        editMovie(updateMovie);
      },
    });

  const navigate = useNavigate();

  const editMovie = (updateMovie) => {
    // fetch PUT
    // 1. method - PUT & id
    // 2. data(updateMovie) - body & JSON
    // 3. Header - JSON

    fetch(`${API}/movies/${movie.id}`, {
      // already movie has id we are using...
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/movies"))
      .then((err) => console.log("Error occurred", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="edit-movie-form">
        {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
        <TextField
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name ? errors.name : null}
          label="Name"
          variant="outlined"
        />
        <TextField
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating ? true : false}
          helperText={touched.rating && errors.rating ? errors.rating : null}
          label="Rating"
          variant="outlined"
        />
        <TextField
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster ? true : false}
          helperText={touched.poster && errors.poster ? errors.poster : null}
          label="Poster"
          variant="outlined"
        />
        <TextField
          name="summary"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary ? true : false}
          helperText={touched.summary && errors.summary ? errors.summary : null}
          label="Summary"
          variant="outlined"
        />
        <TextField
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer ? true : false}
          helperText={touched.trailer && errors.trailer ? errors.trailer : null}
          label="Trailer"
          variant="outlined"
        />
        <Button color="success" type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
}
