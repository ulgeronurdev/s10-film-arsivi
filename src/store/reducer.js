import { DELETE_MOVIE, ADD_MOVIE } from "./actions";
import movies from "./../data";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
