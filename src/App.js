import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/MovieDescription"; 
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Space exploration beyond imagination.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
      rating: 5,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= Number(filterRating))
  );

  
  return (
    <Router>
      <div className="app">
        <h1>🎬 My Movie App 🎥</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
