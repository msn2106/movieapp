// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavorites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}

export function removeFavorites(movie) {
  return {
    type: REMOVE_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(value) {
  return {
    type: SET_SHOW_FAVOURITE,
    value,
  };
}
