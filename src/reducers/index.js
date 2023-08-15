import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavorites: false,
};
export function moviesReducer(state = initialMoviesState, action) {
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

const initialSearchState = {
  result: {},
};
export function searchReducer(state = initialSearchState, action) {
  return state;
}

// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState,
// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: moviesReducer(state.movies, action),
//     search: searchReducer(state.search, action),
//   };
// }

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
})