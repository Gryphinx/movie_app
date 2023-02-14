import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, id, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={coverImg} />
      <div>
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;