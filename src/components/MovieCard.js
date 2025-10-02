import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return <div className="w-36">
  <img src={IMG_CDN_URL+posterPath} />
  </div>;
};

export default MovieCard;
