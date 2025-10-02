import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className=" bg-gradient-to-b from-black/100 to-black/95">
        <div className=" -mt-64 relative ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          {/* <MovieList
            title={"Horror Movies"}
            movies={movies?.nowPlayingMovies}
          /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

/**
    popular movies
      movieCard * n
    now playing movies
    trending movies
    different genres
     */
