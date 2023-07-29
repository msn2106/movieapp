// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';


// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  }
}

export function addFavorites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie
  }
}

export function removeFavorites(movie) {
  return {
    type: REMOVE_FAVOURITES,
    movie
  }
}