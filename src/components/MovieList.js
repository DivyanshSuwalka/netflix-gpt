import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // movies && console.log(movies);

  return (
    <div className="">
      {title && <h2 className="text-white text-2xl pt-4 ml-6">{title}</h2>}
      <div className="flex overflow-x-scroll scrollbar-hide     ">
        <div className="flex gap-6 p-4 m-2 ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
