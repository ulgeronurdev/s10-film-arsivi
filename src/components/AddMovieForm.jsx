import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { customAlphabet } from "nanoid";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";

const AddMovieForm = (props) => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nanoid = customAlphabet("1234567890", 4);
    const newMovieId = Number(nanoid());

    const newMovie = {
      ...movie,
      id: newMovieId,
      metascore: Number(movie.metascore),
    };

    dispatch(addMovie(newMovie));
    push("/movies");
  };

  const { title, director, genre, metascore, description } = movie;
  return (
    <div className="bg-white rounded-md shadow flex-1">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-zinc-200">
          <h4 className="text-xl font-bold">Add Movie</h4>
        </div>

        <div className="px-5 py-3">
          <div className="py-2">
            <label htmlFor="title" className="block pb-1 text-lg">
              Title
            </label>
            <input
              value={title}
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
            />
          </div>
          <div className="py-2">
            <label htmlFor="director" className="block pb-1 text-lg">
              Director
            </label>
            <input
              value={director}
              onChange={handleChange}
              name="director"
              type="text"
              id="director"
            />
          </div>
          <div className="py-2">
            <label htmlFor="genre" className="block pb-1 text-lg">
              Genre
            </label>
            <input
              value={genre}
              onChange={handleChange}
              name="genre"
              type="text"
              id="genre"
            />
          </div>
          <div className="py-2">
            <label htmlFor="metascore" className="block pb-1 text-lg">
              Metascore
            </label>
            <input
              value={metascore}
              onChange={handleChange}
              name="metascore"
              type="number"
              id="metascore"
            />
          </div>
          <div className="py-2">
            <label htmlFor="Description" className="block pb-1 text-lg">
              Description
            </label>
            <textarea
              value={description}
              onChange={handleChange}
              name="description"
              id="Description"
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to={`/movies`} className="myButton bg-zinc-500">
            Vazgeç
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
