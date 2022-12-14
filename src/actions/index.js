// {
//     type: 'ADD_MOVIES',
//         movies: [],
// }
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UNFAVOURITE = "UNFAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const SET_SHOW_DETAILS = "SET_SHOW_DETAILS";
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function unFavourite(movie) {
  return {
    type: UNFAVOURITE,
    movie,
  };
}
export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}
export function setShowDetails(movie) {
  return {
    type: SET_SHOW_DETAILS,
    movie,
  };
}
