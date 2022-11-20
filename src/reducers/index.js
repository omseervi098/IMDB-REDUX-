import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  UNFAVOURITE,
  SET_SHOW_FAVOURITES,
  SET_SHOW_DETAILS,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourite: false,
  showDetail: {},
};
export function movies(state = initialMovieState, action) {
  console.log("Movies Reducer");
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case UNFAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (movie) => movie.Title !== action.movie.Title
        ),
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourite: action.val,
      };
    case SET_SHOW_DETAILS:
      return {
        ...state,
        showDetail: action.movie,
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  console.log("Search Reducer");
  return state;
}
const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState,
};
//when you do this rootreducer call both reducers
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
//combinereducer calls reducer which is needed
export default combineReducers({
  movies,
  search,
});
