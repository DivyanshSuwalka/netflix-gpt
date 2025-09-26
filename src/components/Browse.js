import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex justify-between bg-gradient-to-b from-black bg-opacity-10">
      <Header />
    </div>
  );
};

export default Browse;
