import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, id, year, summary, genres }) {
  const [more, setMore] = useState(false);
  const onClick = () => {
    setMore(true);
  };
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={coverImg} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        {more ? (
          <p>{summary}</p>
        ) : (
          <div>
            <p>
              {summary.length > 200 ? `${summary.slice(0, 235)}...` : summary}
            </p>
            {summary.length > 200 ? (
              <div className={styles.frame}>
                <button class={styles.btn__6} onClick={onClick}>
                  <span>Read More</span>
                </button>
              </div>
            ) : null}
          </div>
        )}
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}ㅤ</li>
          ))}
        </ul>
      </div>
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
