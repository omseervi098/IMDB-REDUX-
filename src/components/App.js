import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import { data } from "../data";
import Navbar from "./Navbar";
import React from "react";
import Detail from "./Detail";
import { addMovies, setShowFavourites } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      console.log(store.getState());
      this.forceUpdate();
    });
    // make api call

    // dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const idx = favourites.indexOf(movie);
    if (idx === -1) {
      return false;
    }
    return true;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { list, favourites, showFavourite, showDetail } =
      this.props.store.getState();
    const displayMovies = showFavourite ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        {!showDetail.Title ? (
          <div className="main">
            <div className="tabs">
              <div
                onClick={() => this.onChangeTab(false)}
                className={`tab ${showFavourite ? " " : "active-tabs"}`}
              >
                Movies
              </div>

              <div
                onClick={() => this.onChangeTab(true)}
                className={`tab ${showFavourite ? "active-tabs" : ""}`}
              >
                Favourites
              </div>
            </div>
            <div className="list" style={{ marginTop: "20px" }}>
              {displayMovies.map((movie, idx) => (
                <MovieCard
                  key={idx}
                  movie={movie}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                />
              ))}
            </div>
            {displayMovies.length === 0 ? (
              <div className="no-movies">No movies to display!</div>
            ) : null}
          </div>
        ) : (
          <Detail
            store={this.props.store}
            dispatch={this.props.store.dispatch}
          />
        )}
      </div>
    );
  }
}

export default App;
