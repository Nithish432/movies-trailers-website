import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import { Button } from "@mui/material/";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BasicForm } from "./BasicForm";

function App() {
  // JS
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ minHeight: "100vh", borderRadius: "0px" }} elevation={5}>
        <div className="App">
          <Link to="/"></Link>
          <Link to="/movies"></Link>
          <Link to="/add-movies"></Link>
          <Link to="/color-game"></Link>

          <AppBar position="static">
            <Toolbar>
              {/* <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button> */}
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/add-movies")}>
                Add Movie
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                sx={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <section className="route-container">
            <Routes>
              <Route path="/" element={<Navigate to="/movies"/>} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/add-movies" element={<AddMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route
                path="/films"
                element={<Navigate replace to={"/movies"} />}
              />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/color-game" element={<AddColor />} />
              <Route path="/basic-form" element={<BasicForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}



// Lifting the state up - move the state to a common parent

// JSX - JavaScript XML
// JSX -> JavaScript
// for, class -> reserved keyword

// 1. First letter must be capital
// 2. It should return atleast one jsx element

export default App;
