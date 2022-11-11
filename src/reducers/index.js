import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  UNFAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourite: false,
};
export default function movies(state = initialMovieState, action) {
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
    default:
      return state;
  }
}
