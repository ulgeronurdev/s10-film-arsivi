import { DELETE_MOVIE } from "./actions";
import movies from "./../data";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
