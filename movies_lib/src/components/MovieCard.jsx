import { Link } from "react-router-dom";
import{FaStar} from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {

  return (
    <div className="movie_card">
        <img src={imageUrl + movie.poster_path} alt={movie.name}></img>
        <h2>{movie.name}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}></Link>}
    </div>
  )
}

export default MovieCard
