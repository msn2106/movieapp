import { combineReducers } from "redux";
import { ADD_FAVOURITES, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE } from "../actions";

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
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function searchReducer(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
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
});
