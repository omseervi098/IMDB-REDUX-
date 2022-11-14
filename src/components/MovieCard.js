import React from "react";

import { addFavourite, unFavourite, setShowDetails } from "../actions";
class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnfavouriteClick = () => {
    const { movie } = this.props;
    //remove from favourites
    this.props.dispatch(unFavourite(movie));
  };
  handleDetailsClick = () => {
    const { movie } = this.props;
    this.props.dispatch(setShowDetails(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.Poster}
              className="img-fluid rounded-start card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body p-4">
              <div className="card-top">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-year my-1">{movie.Year}</p>
                <p className="card-rating my-1 rating">{movie.imdbRating}</p>
              </div>
              <p className="card-plot">{movie.Plot}</p>

              <div className="btn-group">
                <button
                  onClick={this.handleDetailsClick}
                  className="btn btn-primary detail-btn"
                >
                  Get Details
                </button>
                {!isFavourite ? (
                  <button
                    onClick={this.handleFavouriteClick}
                    className="btn btn-primary addtofav-btn"
                  >
                    Add To Favourites
                  </button>
                ) : (
                  <button
                    onClick={this.handleUnfavouriteClick}
                    className="btn btn-primary addtofav-btn"
                  >
                    Unfavourite
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
