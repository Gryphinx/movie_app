import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = () => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movie));
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div>
            <a href={movies.url}>Watch Now</a>
          </div>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
