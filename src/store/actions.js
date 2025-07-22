export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
