import "bootstrap/dist/css/bootstrap.min.css";

import MovieCard from "./MovieCard";
import { data } from "../data";
import Navbar from "./Navbar";
import React from "react";
import { addMovies } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    // make api call

    // dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }
  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list" style={{ marginTop: "20px" }}>
            {list.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
