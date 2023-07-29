import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavorites: false,
};
export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITES:
      const filteredArray = state.favourites.filter((movie) => movie.Title !== action.movie.Title);
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavorites: action.value,
      };
    default:
      return state;
  }
}
