import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {API} from "./global";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  rating: yup.number().required("why not fill this rating?").min(0, "Need a bigger rating😂").max(10, "Too much rating😂"),
  poster: yup.string().required("why not fill this poster?").min(4, "Need a longer poster😂"),
  summary: yup.string().required("why not fill this summary?").min(20, "Need a longer summary😂"),
  trailer: yup.string().required("why not fill this trailer?").min(4, "Need a longer trailer😂"),
});

function AddMovie() {
  const { handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      rating: "",
      poster: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log("Form values", newMovie);
      addMovie(newMovie);
    },
  });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {

    // fetch post
    // 1. method - POST
    // 2. data (newMovie) - body & JSON
    // 3. Header - JSON

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/movies"))
      .then((err) => console.log("Error occurred", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-movie-form">
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
        <Button type="submit" variant="contained">
          Add Movie
        </Button>
        {/* <div>
          values
          <pre>{JSON.stringify(values, null, 2)}</pre>
          Error
          <pre>{JSON.stringify(errors)}</pre>
          Touched
          <pre>{JSON.stringify(touched)}</pre>
        </div> */}
      </form>
    </>
  );
}

//AddMovie Validation

// name - required
// rating - 0 - 10, required
// poster - min 4, required
// summary - min 20 chars, required
// trailer - min 4, required

export { AddMovie }
